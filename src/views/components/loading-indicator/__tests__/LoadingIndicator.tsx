import { render } from '@testing-library/react';
import LoadingIndicator from '../LoadingIndicator';

describe('LoadingIndicator', () => {
    test('should show component', async () => {
        const { container } = render(<LoadingIndicator message="Hi there" />);

        expect(container).toMatchSnapshot();
    });
});
