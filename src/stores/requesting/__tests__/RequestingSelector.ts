import { selectRequesting } from '../RequestingSelector';

describe('RequestingSelector', () => {
    let store: any;

    beforeEach(() => {
        store = {
            requesting: {
                ['SomeAction.REQUEST_TEST']: true,
            },
        };
    });

    describe('selectRequesting', () => {
        it('should return true', () => {
            const actualResult: boolean = selectRequesting([
                'SomeAction.REQUEST_TEST',
            ])(store);

            expect(actualResult).toBe(true);
        });

        it('should return false', () => {
            const actualResult: boolean = selectRequesting([
                'SomeAction.REQUEST_OTHER',
            ])(store);

            expect(actualResult).toBe(false);
        });
    });
});
