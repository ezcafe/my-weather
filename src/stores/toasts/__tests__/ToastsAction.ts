import { v4 as uuidv4 } from 'uuid';
import * as ToastsAction from '../ToastsAction';
import IToast from '../models/IToast';
import ToastStatusEnum from '../../../constants/ToastStatusEnum';
import IAction from '../../../models/IAction';
import * as ActionUtility from '../../../utilities/ActionUtility';

describe('ToastsAction', () => {
    describe('add', () => {
        it('should call action', () => {
            const actualResult: IAction<IToast> = ToastsAction.add(
                'Error message',
                ToastStatusEnum.Error
            );
            const expectedResult: IAction<IToast> = ActionUtility.createAction(
                ToastsAction.ADD_TOAST,
                {
                    message: 'Error message',
                    type: ToastStatusEnum.Error,
                    id: uuidv4(),
                }
            );

            expect(actualResult.payload?.message).toEqual(
                expectedResult.payload?.message
            );
            expect(actualResult.payload?.type).toEqual(
                expectedResult.payload?.type
            );
        });
    });

    describe('removeById', () => {
        it('should call action with payload', () => {
            const expectedId = uuidv4();

            const actualResult: IAction<string> = ToastsAction.removeById(
                expectedId
            );
            const expectedResult: IAction<string> = ActionUtility.createAction(
                ToastsAction.REMOVE_TOAST,
                expectedId
            );

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
