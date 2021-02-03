import { useSelector } from 'react-redux';
import SearchResult from './SearchResult';
import LoadingIndicator from '../../../components/loading-indicator/LoadingIndicator';
import {
    locationWeatherSelector,
    isLoadingLocationWeatherSelector,
} from '../../../../stores/locations/LocationsSelector';
import LocationWeatherModel from '../../../../stores/locations/models/LocationWeatherModel';
import LocationConsolidatedWeatherModel from '../../../../stores/locations/models/LocationConsolidatedWeatherModel';

const SearchResults: React.FC = () => {
    const isLoadingLocationWeather: boolean = useSelector(
        isLoadingLocationWeatherSelector
    );
    const locationWeather: LocationWeatherModel | undefined = useSelector(
        locationWeatherSelector
    );

    if (isLoadingLocationWeather) {
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
