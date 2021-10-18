import { debounce } from '@medly-components/utils';

jest.useFakeTimers();

describe('debounce', () => {
    it('should work properly', () => {
        const func = jest.fn(),
            debouncedFunc = debounce(func, 500);
        for (let i = 0; i <= 10; i++) {
            debouncedFunc();
        }
        jest.runAllTimers();

        expect(func).toBeCalledTimes(1);
    });
});
