import { useCallback, useMemo, useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select, { OptionTypeBase } from 'react-select';
import { Dispatch } from 'redux';
import {
    REQUEST_LOCATIONS,
    requestLocationsAction,
    requestLocationWeatherAction,
} from '../../../../stores/locations/LocationsAction';
import { locationsSelector } from '../../../../stores/locations/LocationsSelector';
import { selectRequesting } from '../../../../stores/requesting/RequestingSelector';
import LocationModel from '../../../../stores/locations/models/LocationModel';

import './SearchForm.css';

const customStyles = {
    container: () => ({
        width: '100%',
    }),
    valueContainer: () => ({
        paddingLeft: 56,
    }),
};

const SearchForm: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState<OptionTypeBase | null>(
        null
    );
    const isLoading: boolean = useSelector(
        selectRequesting([REQUEST_LOCATIONS])
    );
    const locations: LocationModel[] = useSelector(locationsSelector);

    const onChange = (option: OptionTypeBase | null) => {
        if (option) {
            dispatch(requestLocationWeatherAction(option.value));
            setSelectedValue(option);
        }
    };

    const onInputChange = useCallback(
        (newValue: string) => {
            const inputValue = newValue.replace(/\W/g, '');
            if (inputValue) {
                dispatch(requestLocationsAction(inputValue));
            }
            return inputValue;
        },
        [dispatch]
    );

    const options = useMemo(
        (): ReadonlyArray<OptionTypeBase> =>
            locations.map((location: LocationModel) => ({
                label: location.title,
                value: location.woeid,
            })),
        [locations]
    );

    return (
        <Form className="search-form">
            <InputGroup className="mb-2">
                <InputGroup.Prepend>
                    <InputGroup.Text>🔍</InputGroup.Text>
                </InputGroup.Prepend>
                <Select
                    cacheOptions
                    isLoading={isLoading}
                    noOptionsMessage={() => 'No city'}
                    onChange={onChange}
                    onInputChange={onInputChange}
                    options={options}
                    placeholder="Enter city name"
                    styles={customStyles}
                    value={selectedValue}
                />
            </InputGroup>
        </Form>
    );
};

export default SearchForm;
