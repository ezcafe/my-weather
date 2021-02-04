import IErrorState from '../../stores/error/models/IErrorState';
import IStore from '../../models/IStore';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

/**
 * Returns a new object with the keys being the finished action type
 * (e.g. "SomeAction.REQUEST_*_FINISHED") and the value being a
 * HttpErrorResponseModel.
 */
export const selectRawErrors = (actionTypes: string[]) => (
    state: IStore
): IErrorState => {
    return actionTypes.reduce((partialState: object, actionType: string) => {
        const model: HttpErrorResponseModel = state.error[actionType];

        if (model) {
            return { ...partialState, [actionType]: model };
        }

        return partialState;
    }, {});
};

/**
 * Finds any errors matching the array of actionTypes and combines all error
 * messages in to a single string.
 */
export const selectErrorText = (actionTypes: string[]) => (
    state: IStore
): string => {
    const errorList: string[] = actionTypes.reduce(
        (errorMessages: string[], actionType: string) => {
            const model: HttpErrorResponseModel = state.error[actionType];

            if (model) {
                const { message, errors } = model;
                const arrayOfErrors: string[] = errors.length
                    ? errors
                    : [message];

                return errorMessages.concat(arrayOfErrors);
            }

            return errorMessages;
        },
        []
    );

    return errorList.join(', ');
};

/**
 * Returns true or false if there are errors found matching the array of actionTypes.
 */
export const hasErrors = (actionTypes: string[]) => (
    state: IStore
): boolean => {
    return (
        actionTypes
            .map((actionType: string) => state.error[actionType])
            .filter(Boolean).length > 0
    );
};
