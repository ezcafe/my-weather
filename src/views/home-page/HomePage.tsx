import { Col, Container, Row } from 'react-bootstrap';
import SearchForm from './components/search-form/SearchForm';
import SearchResults from './components/search-results/SearchResults';
import './HomePage.css';

const HomePage: React.FC = () => (
    <Container>
        <Row>
            <Col>
                <SearchForm />
            </Col>
        </Row>
        <Row noGutters>
            <SearchResults />
        </Row>
    </Container>
);
export default HomePage;
