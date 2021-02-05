import * as ActionUtility from '../ActionUtility';
import { mockedLocation } from '../../fixtures';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import IAction from '../../models/IAction';
import LocationModel from '../../stores/locations/models/LocationModel';

describe('ActionUtility', () => {
    describe('createAction', () => {
        it('should create action with string parameter', () => {
            const action: IAction<string> = ActionUtility.createAction(
                'SomeAction.REQUEST_SOMETHING',
                'error message'
            );
            expect(action).toEqual({
                type: 'SomeAction.REQUEST_SOMETHING',
                payload: 'error message',
                error: false,
                meta: null,
            });
        });

        it('should create action with object parameter', () => {
            const model: LocationModel[] = [mockedLocation];
            const action: IAction<LocationModel[]> = ActionUtility.createAction(
                'SomeAction.REQUEST_SOMETHING_FINISHED',
                model
            );
            expect(action).toEqual({
                type: 'SomeAction.REQUEST_SOMETHING_FINISHED',
                payload: model,
                error: false,
                meta: null,
            });
        });

        it('should create action with error parameter', () => {
            const error: HttpErrorResponseModel = new HttpErrorResponseModel();
            const action: IAction<HttpErrorResponseModel> = ActionUtility.createAction(
                'SomeAction.REQUEST_SOMETHING_FINISHED',
                error,
                true
            );
            expect(action).toEqual({
                type: 'SomeAction.REQUEST_SOMETHING_FINISHED',
                payload: error,
                error: true,
                meta: null,
            });
        });

        it('should create action with meta parameter', () => {
            const meta: object = { payload: 'abc' };
            const action: IAction<string> = ActionUtility.createAction(
                'SomeAction.REQUEST_SOMETHING',
                'error message',
                false,
                meta
            );
            expect(action).toEqual({
                type: 'SomeAction.REQUEST_SOMETHING',
                payload: 'error message',
                error: false,
                meta,
            });
        });
    });
});
