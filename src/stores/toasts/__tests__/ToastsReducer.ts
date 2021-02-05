import { v4 as uuidv4 } from 'uuid';
import * as ToastsAction from '../ToastsAction';
import toastsReducer, { initialState } from '../ToastsReducer';
import ToastStatusEnum from '../../../constants/ToastStatusEnum';
import IAction from '../../../models/IAction';
import * as ActionUtility from '../../../utilities/ActionUtility';

describe('ToastsReducer', () => {
    const exampleToastId = uuidv4();
    const exampleToast = {
        message: 'Error message',
        type: ToastStatusEnum.Error,
        id: exampleToastId,
    };

    it('returns default state with invalid action type', () => {
        const action: IAction<undefined> = ActionUtility.createAction('');
        expect(toastsReducer(undefined, action)).toEqual(initialState);
    });

    describe(ToastsAction.ADD_TOAST, () => {
        it('should update toast state', () => {
            const action = ActionUtility.createAction(
                ToastsAction.ADD_TOAST,
                exampleToast
            );

            const actualResult = toastsReducer(initialState, action);
            const expectedResult = {
                ...initialState,
                items: [...initialState.items, exampleToast],
            };

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe(ToastsAction.REMOVE_TOAST, () => {
        it('should update toast state', () => {
            const state = {
                ...initialState,
                items: [...initialState.items, exampleToast],
            };
            const action = ActionUtility.createAction(
                ToastsAction.REMOVE_TOAST,
                exampleToastId
            );

            const actualResult = toastsReducer(state, action);
            const expectedResult = {
                ...initialState,
                items: [...initialState.items],
            };

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
