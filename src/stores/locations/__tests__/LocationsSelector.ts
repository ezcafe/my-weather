import {
    locationsSelector,
    locationWeatherSelector,
} from '../LocationsSelector';
import LocationModel from '../models/LocationModel';
import LocationWeatherModel from '../models/LocationWeatherModel';
import { mockedLocation, mockedLocationWeather } from '../../../fixtures';

describe('LocationsSelector', () => {
    const locationItems: LocationModel[] = [mockedLocation];
    const store: any = {
        locations: {
            items: locationItems,
            weather: undefined,
        },
    };

    describe('locationsSelector', () => {
        it('should return same location model', () => {
            const actualResult: LocationModel[] = locationsSelector(store);
            const expectedResult: LocationModel[] = locationItems;

            expect(actualResult).toBe(expectedResult);
        });
    });

    describe('locationWeatherSelector', () => {
        it('should return no model', () => {
            const actualResult:
                | LocationWeatherModel
                | undefined = locationWeatherSelector(store);
            const expectedResult: LocationWeatherModel | undefined = undefined;

            expect(actualResult).toBe(expectedResult);
        });

        it('should return same location weather model', () => {
            const locationWeatherModel = mockedLocationWeather;
            const newStore: any = {
                locations: {
                    items: [],
                    weather: locationWeatherModel,
                },
            };
            const actualResult:
                | LocationWeatherModel
                | undefined = locationWeatherSelector(newStore);
            const expectedResult:
                | LocationWeatherModel
                | undefined = locationWeatherModel;

            expect(actualResult).toBe(expectedResult);
        });
    });
});
