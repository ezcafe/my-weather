import { render, RenderResult } from '@testing-library/react';
import SearchResults from '../SearchResults';
import { mockedLocations } from '../../../../../fixtures';
import withMockedRedux from '../../../../../fixtures/withMockedRedux';
import IStore from '../../../../../models/IStore';
import { REQUEST_LOCATION_WEATHER } from '../../../../../stores/locations/LocationsAction';

describe('SearchResults', () => {
    function renderComponent(initialState?: Partial<IStore>): RenderResult {
        const WrappedComponent = withMockedRedux(SearchResults, initialState);
        return render(<WrappedComponent />);
    }

    test('should show loading indicator', () => {
        const { container } = renderComponent({
            requesting: {
                [REQUEST_LOCATION_WEATHER]: true,
            },
        });
        expect(container).toMatchSnapshot();
    });

    test('should show nothing', () => {
        const { container } = renderComponent({
            locations: {
                items: [],
                weather: undefined,
            },
        });
        expect(container).toMatchSnapshot();
    });

    test('should show results', () => {
        const { container } = renderComponent({
            locations: mockedLocations,
        });
        expect(container).toMatchSnapshot();
    });
});
