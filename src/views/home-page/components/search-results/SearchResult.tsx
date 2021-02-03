import { Col } from 'react-bootstrap';
import './SearchResult.css';

const SearchResult: React.FC = () => {
    return (
        <Col>
            <div className="search-result">
                <h2>Tuesday</h2>
                <span>Min: 20</span>
                <span>Max: 30</span>
            </div>
        </Col>
    );
};

export default SearchResult;
