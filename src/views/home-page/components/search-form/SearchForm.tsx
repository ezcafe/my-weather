import { InputGroup, Form, FormControl } from 'react-bootstrap';

import './SearchForm.css';

const SearchForm: React.FC = () => {
    return (
        <Form>
            <InputGroup className="mb-2">
                <InputGroup.Prepend>
                    <InputGroup.Text>🔍</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="inlineFormInputGroup" placeholder="Search" />
            </InputGroup>
        </Form>
    );
};

export default SearchForm;
