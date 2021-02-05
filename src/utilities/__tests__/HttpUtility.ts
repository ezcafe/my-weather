import axios, { AxiosResponse } from 'axios';
import * as HttpUtility from '../HttpUtility';
import { mockedLocation } from '../../fixtures';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

jest.mock('axios', () => jest.fn());

describe('HttpUtility', () => {
    describe('get', () => {
        const endpoint: string = '/api/';
        const params: object = {
            query: 'san',
        };

        it('should return data', async () => {
            const mockedLocationResponse: AxiosResponse = {
                data: [mockedLocation],
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
            };

            ((axios as unknown) as jest.Mock).mockResolvedValueOnce(
                mockedLocationResponse
            );

            const response:
                | AxiosResponse
                | HttpErrorResponseModel = await HttpUtility.get(
                endpoint,
                params
            );

            expect(axios).toBeCalledTimes(1);
            expect(axios).toHaveBeenCalledWith({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'GET',
                params,
                url: endpoint,
            });

            if (!(response instanceof HttpErrorResponseModel)) {
                expect(response.data[0]).toEqual(mockedLocation);
            }
        });

        it('should return error', async () => {
            ((axios as unknown) as jest.Mock).mockRejectedValueOnce(
                new Error('Request failed with status code 404')
            );

            const response:
                | AxiosResponse
                | HttpErrorResponseModel = await HttpUtility.get(
                endpoint,
                params
            );

            expect(axios).toBeCalledTimes(1);
            expect(axios).toHaveBeenCalledWith({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'GET',
                params,
                url: endpoint,
            });

            if (response instanceof HttpErrorResponseModel) {
                expect(response.message).toEqual(
                    'Request failed with status code 404'
                );
            }
        });
    });
});
