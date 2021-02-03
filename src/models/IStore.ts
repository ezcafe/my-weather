import { RouterState } from 'connected-react-router';
import IErrorState from '../stores/error/models/IErrorState';
import ILocationsState from '../stores/locations/models/ILocationsState';
import IRequestingState from '../stores/requesting/models/IRequestingState';
import IToastsState from '../stores/toasts/models/IToastsState';

export default interface IStore {
    readonly error: IErrorState;
    readonly requesting: IRequestingState;
    readonly router: RouterState;
    readonly locations: ILocationsState;
    readonly toasts: IToastsState;
}
