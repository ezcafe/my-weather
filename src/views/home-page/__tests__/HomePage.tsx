import { render, RenderResult } from '@testing-library/react';
import HomePage from '../HomePage';
import { mockedLocations } from '../../../fixtures';
import withMockedRedux from '../../../fixtures/withMockedRedux';
import IStore from '../../../models/IStore';

describe('HomePage', () => {
    function renderComponent(initialState?: Partial<IStore>): RenderResult {
        const WrappedComponent = withMockedRedux(HomePage, initialState);
        return render(<WrappedComponent />);
    }

    test('should show component', () => {
        const { container } = renderComponent({
            locations: mockedLocations,
        });
        expect(container).toMatchSnapshot();
    });
});
