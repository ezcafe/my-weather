import { selectErrorText, selectRawErrors, hasErrors } from '../ErrorSelector';
import IErrorState from '../models/IErrorState';
import HttpErrorResponseModel from '../../../models/HttpErrorResponseModel';

describe('ErrorSelector', () => {
    let store: any;
    let httpErrorResponseModel: any;
    const actionType: string = 'SomeAction.REQUEST_TEST_FINISHED';

    beforeEach(() => {
        httpErrorResponseModel = new HttpErrorResponseModel();

        httpErrorResponseModel.errors = ['Unauthorized'];

        store = {
            error: {
                [actionType]: httpErrorResponseModel,
            },
        };
    });

    describe('selectRawErrors', () => {
        it('should return same error model', () => {
            const actualResult: IErrorState = selectRawErrors([actionType])(
                store
            );
            const expectedResult: IErrorState = store.error;

            expect(actualResult[actionType]).toBe(expectedResult[actionType]);
        });

        it('should return undefined value', () => {
            const actualResult: IErrorState = selectRawErrors(['noop'])(store);
            const expectedResult: any = {
                [actionType]: undefined,
            };

            expect(actualResult[actionType]).toBe(expectedResult[actionType]);
        });
    });

    describe('selectErrorText', () => {
        it('should return error text from error model(s)', () => {
            const actualResult: string = selectErrorText([actionType])(store);
            const expectedResult: string = httpErrorResponseModel.errors.join(
                ', '
            );

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return empty string', () => {
            const actualResult: string = selectErrorText(['noop'])(store);
            const expectedResult: string = '';

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('hasErrors', () => {
        it('should return false', () => {
            const actualResult: boolean = hasErrors([actionType])(store);
            const expectedResult: boolean = true;

            expect(actualResult).toBe(expectedResult);
        });

        it('should return false', () => {
            const actualResult: boolean = hasErrors(['noop'])(store);
            const expectedResult: boolean = false;

            expect(actualResult).toBe(expectedResult);
        });
    });
});
