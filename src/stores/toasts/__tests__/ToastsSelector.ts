import { v4 as uuidv4 } from 'uuid';
import { toastsSelector } from '../ToastsSelector';
import IToast from '../models/IToast';
import ToastStatusEnum from '../../../constants/ToastStatusEnum';

describe('ToastsSelector', () => {
    describe('toastsSelector', () => {
        it('should return same toast model', () => {
            const toastItems: IToast[] = [
                {
                    message: 'Error message',
                    type: ToastStatusEnum.Error,
                    id: uuidv4(),
                },
            ];
            const store: any = {
                toasts: {
                    items: toastItems,
                },
            };
            const actualResult: IToast[] = toastsSelector(store);
            const expectedResult: IToast[] = toastItems;

            expect(actualResult).toBe(expectedResult);
        });
    });
});
