import { v4 as uuidv4 } from 'uuid';
import * as ErrorAction from '../ErrorAction';
import IAction from '../../../models/IAction';
import * as ActionUtility from '../../../utilities/ActionUtility';

describe('ErrorAction', () => {
    describe('removeById', () => {
        it('should call action with payload', () => {
            const expectedId = uuidv4();

            const actualResult: IAction<string> = ErrorAction.removeById(
                expectedId
            );
            const expectedResult: IAction<string> = ActionUtility.createAction(
                ErrorAction.REMOVE,
                expectedId
            );

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('clearAll', () => {
        it('should call action', () => {
            const actualResult: IAction<undefined> = ErrorAction.clearAll();
            const expectedResult: IAction<string> = ActionUtility.createAction(
                ErrorAction.CLEAR_ALL
            );

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
