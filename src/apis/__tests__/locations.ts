import { fetchLocations, fetchLocationWeather } from '../locations';
import LocationModel from '../../stores/locations/models/LocationModel';
import LocationWeatherModel from '../../stores/locations/models/LocationWeatherModel';
import * as EffectUtility from '../../utilities/ApiUtility';

describe('locations', () => {
    describe('fetchLocations', () => {
        it('should call getToModel with payload', () => {
            const getToModelMock = jest.spyOn(EffectUtility, 'getToModel');
            fetchLocations('san');
            expect(getToModelMock).toBeCalledTimes(1);
            expect(getToModelMock).toHaveBeenCalledWith(
                LocationModel,
                '/api/location/search/',
                { query: 'san' }
            );
            getToModelMock.mockRestore();
        });
    });

    describe('fetchLocationWeather', () => {
        it('should call getToModel with payload', () => {
            const getToModelMock = jest.spyOn(EffectUtility, 'getToModel');
            fetchLocationWeather('12345');
            expect(getToModelMock).toBeCalledTimes(1);
            expect(getToModelMock).toHaveBeenCalledWith(
                LocationWeatherModel,
                '/api/location/12345/'
            );
            getToModelMock.mockRestore();
        });
    });
});
