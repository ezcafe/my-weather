import { Col } from 'react-bootstrap';
import dayjs from 'dayjs';
import LocationConsolidatedWeatherModel from '../../../../stores/locations/models/LocationConsolidatedWeatherModel';
import './SearchResult.css';

const RESPONSED_DATE_FORMAT = 'YYYY-MM-DD';
const DISPLAYED_DATE_FORMAT = 'dddd';

interface iProps {
    item: LocationConsolidatedWeatherModel;
}

const SearchResult: React.FC<iProps> = ({ item }) => {
    const {
        applicable_date,
        min_temp,
        max_temp,
        weather_state_abbr,
        weather_state_name,
    } = item;
    const date = dayjs(applicable_date, RESPONSED_DATE_FORMAT).format(
        DISPLAYED_DATE_FORMAT
    );
    const max = Math.floor(max_temp);
    const min = Math.ceil(min_temp);
    const icon = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;

    return (
        <Col>
            <div className="search-result">
                <img alt={weather_state_name} src={icon} />
                <h2>{date}</h2>
                <span>{`Min: ${min}`}</span>
                <span>{`Max: ${max}`}</span>
            </div>
        </Col>
    );
};

export default SearchResult;
