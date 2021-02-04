import { useSelector } from 'react-redux';
import SearchResult from './SearchResult';
import LoadingIndicator from '../../../components/loading-indicator/LoadingIndicator';
import { REQUEST_LOCATION_WEATHER } from '../../../../stores/locations/LocationsAction';
import { locationWeatherSelector } from '../../../../stores/locations/LocationsSelector';
import { selectRequesting } from '../../../../stores/requesting/RequestingSelector';
import LocationWeatherModel from '../../../../stores/locations/models/LocationWeatherModel';
import LocationConsolidatedWeatherModel from '../../../../stores/locations/models/LocationConsolidatedWeatherModel';

const SearchResults: React.FC = () => {
    const isLoading: boolean = useSelector(
        selectRequesting([REQUEST_LOCATION_WEATHER])
    );
    const locationWeather: LocationWeatherModel | undefined = useSelector(
        locationWeatherSelector
    );

    if (isLoading) {
        return <LoadingIndicator />;
    }

    if (!locationWeather) {
        return null;
    }

    const consolidatedWeather: LocationConsolidatedWeatherModel[] =
        locationWeather.consolidated_weather;
    consolidatedWeather.length = 5; // limit 5 dates

    return (
        <>
            {consolidatedWeather.map(
                (model: LocationConsolidatedWeatherModel) => (
                    <SearchResult key={model.id} item={model} />
                )
            )}
        </>
    );
};

export default SearchResults;
