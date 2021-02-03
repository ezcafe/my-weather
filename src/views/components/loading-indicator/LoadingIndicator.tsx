import { Spinner } from 'react-bootstrap';

interface IProps {
    readonly message?: string;
}

export default function LoadingIndicator({
    message = 'Loading...',
}: IProps): React.ReactElement {
    return (
        <Spinner animation="border" role="status">
            <span className="sr-only">{message}</span>
        </Spinner>
    );
}
