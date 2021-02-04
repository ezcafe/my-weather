import IStore from '../../models/IStore';

export const selectRequesting = (actionTypes: string[]) => (
    state: IStore
): boolean => {
    return actionTypes.some(
        (actionType: string) => state.requesting[actionType]
    );
};
