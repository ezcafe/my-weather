import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../SearchForm';
import { mockedLocations } from '../../../../../fixtures';
import withMockedRedux from '../../../../../fixtures/withMockedRedux';
import IStore from '../../../../../models/IStore';

describe('SearchForm', () => {
    function renderComponent(initialState?: Partial<IStore>): RenderResult {
        const WrappedComponent = withMockedRedux(SearchForm, initialState);
        return render(<WrappedComponent />);
    }

    test('should show component', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    test('should show loading indicator when typing', () => {
        const { container, getByRole } = renderComponent();
        userEvent.type(getByRole('textbox'), 'san');
        expect(container).toMatchSnapshot();
    });

    test('should show suggestions', () => {
        const { container, getByRole } = renderComponent({
            locations: mockedLocations,
        });
        userEvent.click(getByRole('textbox'));
        expect(container).toMatchSnapshot();
    });
});
