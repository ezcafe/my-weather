import { useSelector } from 'react-redux';
import { toastsSelector } from '../../../stores/toasts/ToastsSelector';
import IToast from '../../../stores/toasts/models/IToast';
import ToastCard from './Toast';
import './Toasts.css';

const Toasts: React.FC = () => {
    const toasts: IToast[] = useSelector(toastsSelector);

    if (toasts.length === 0) {
        return null;
    }

    return (
        <div className="toasts">
            {toasts.map((model: IToast) => (
                <ToastCard key={model.id} item={model} />
            ))}
        </div>
    );
};

export default Toasts;
