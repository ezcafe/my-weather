import IToast from './models/IToast';
import IStore from '../../models/IStore';

export function toastsSelector(state: IStore): IToast[] {
    return state.toasts.items;
}
