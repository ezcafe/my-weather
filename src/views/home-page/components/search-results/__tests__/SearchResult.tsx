import { render } from '@testing-library/react';
import SearchResult from '../SearchResult';
import { mockedLocationConsolidatedWeather } from '../../../../../fixtures';

describe('SearchResult', () => {
    test('should show component', () => {
        const firstItem = mockedLocationConsolidatedWeather;
        const { container } = render(<SearchResult item={firstItem} />);
        expect(container).toMatchSnapshot();
    });
});
