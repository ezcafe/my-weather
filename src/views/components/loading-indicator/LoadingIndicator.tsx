import { Spinner } from 'react-bootstrap';

import './LoadingIndicator.css';

interface IProps {
    readonly message?: string;
}

export default function LoadingIndicator({
    message = 'Loading...',
}: IProps): React.ReactElement {
    return (
        <Spinner animation="border" role="status" size="sm" className="ai">
            <span className="sr-only">{message}</span>
        </Spinner>
    );
}
