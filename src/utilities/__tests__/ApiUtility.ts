import { AxiosResponse } from 'axios';
import * as ApiUtility from '../ApiUtility';
import * as HttpUtility from '../HttpUtility';
import { mockedLocationData } from '../../fixtures';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import LocationModel from '../../stores/locations/models/LocationModel';

describe('ApiUtility', () => {
    describe('getToModel', () => {
        const endpoint: string = '/api/';
        const params: object = {
            query: 'san',
        };

        it('should return model', async () => {
            const mockedLocationResponse: AxiosResponse = {
                data: [mockedLocationData],
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
            };
            const getMock = jest
                .spyOn(HttpUtility, 'get')
                .mockResolvedValueOnce(mockedLocationResponse);

            const model:
                | LocationModel[]
                | HttpErrorResponseModel = await ApiUtility.getToModel<
                LocationModel[]
            >(LocationModel, endpoint, params);

            expect(getMock).toBeCalledTimes(1);
            expect(getMock).toHaveBeenCalledWith(endpoint, params, undefined);

            if (!(model instanceof HttpErrorResponseModel)) {
                expect(model[0].title).toEqual(
                    new LocationModel(mockedLocationData).title
                );
            }

            getMock.mockRestore();
        });

        it('should return error', async () => {
            const mockedErrorResponse: HttpErrorResponseModel = {
                id: '06e081c9-4cf7-4b5f-852c-85e3c7245282',
                status: 0,
                message: 'Error requesting data',
                errors: [],
                url: endpoint,
                raw: {},
            };
            const getMock = jest
                .spyOn(HttpUtility, 'get')
                .mockResolvedValueOnce(mockedErrorResponse);

            const model:
                | LocationModel[]
                | HttpErrorResponseModel = await ApiUtility.getToModel<
                LocationModel[]
            >(LocationModel, endpoint, params);

            expect(getMock).toBeCalledTimes(1);
            expect(getMock).toHaveBeenCalledWith(endpoint, params, undefined);

            if (model instanceof HttpErrorResponseModel) {
                expect(model).toEqual(mockedErrorResponse);
            }

            getMock.mockRestore();
        });
    });
});
