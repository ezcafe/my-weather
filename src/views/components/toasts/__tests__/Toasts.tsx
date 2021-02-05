import { render, RenderResult } from '@testing-library/react';
import Toasts from '../Toasts';
import { mockedToasts } from '../../../../fixtures';
import withMockedRedux from '../../../../fixtures/withMockedRedux';
import IStore from '../../../../models/IStore';

describe('Toasts', () => {
    function renderComponent(initialState?: Partial<IStore>): RenderResult {
        const WrappedComponent = withMockedRedux(Toasts, initialState);
        return render(<WrappedComponent />);
    }

    test('should show component', () => {
        const { container } = renderComponent({
            toasts: mockedToasts,
        });
        expect(container).toMatchSnapshot();
    });
});
