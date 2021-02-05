import { render, RenderResult } from '@testing-library/react';
import Toast from '../Toast';
import { mockedToasts } from '../../../../fixtures';
import withMockedRedux from '../../../../fixtures/withMockedRedux';
import IStore from '../../../../models/IStore';

describe('Toast', () => {
    function renderComponent(initialState?: Partial<IStore>): RenderResult {
        const WrappedComponent = withMockedRedux(Toast, initialState);
        return render(<WrappedComponent item={mockedToasts.items[0]} />);
    }

    test('should show component', async () => {
        const { container } = renderComponent({
            toasts: mockedToasts,
        });
        expect(container).toMatchSnapshot();
    });
});
