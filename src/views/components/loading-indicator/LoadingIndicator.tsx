import { Spinner } from 'react-bootstrap';

import './LoadingIndicator.css';

interface IProps {
    readonly message?: string;
}

const LoadingIndicator: React.FC<IProps> = ({
    message = 'Loading...',
}: IProps) => (
    <Spinner animation="border" role="status" size="sm" className="ai">
        <span className="sr-only">{message}</span>
    </Spinner>
);

export default LoadingIndicator;
