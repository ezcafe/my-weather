import IAction from '../models/IAction';

export const createAction = <T = undefined>(
    type: string,
    payload?: T,
    error: boolean = false,
    meta: any = null
): IAction<T> => {
    return { type, payload, error, meta };
};
