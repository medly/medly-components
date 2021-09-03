import { COOKIE_STORAGE } from './cookieStorage';

describe('cookie storage', () => {
    it('should return the expected value on calling get function', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `first=${JSON.stringify('firstValue')}; second=${JSON.stringify('secondValue')}`
        });
        expect(COOKIE_STORAGE.getItem('first')).toEqual('firstValue');
        expect(COOKIE_STORAGE.getItem('second')).toEqual('secondValue');
    });

    it('should return parsed value if value is valid object', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `myCookie=${JSON.stringify({ name: 'Mukul' })}`
        });
        expect(COOKIE_STORAGE.getItem('myCookie')).toEqual({ name: 'Mukul' });
    });

    it('should return null if key is not present in cookie', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `myCookie=${JSON.stringify('dummyValue')}`
        });
        expect(COOKIE_STORAGE.getItem('dummy')).toBeNull();
    });

    it('should set the expected value on calling seItem function', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: ''
        });
        COOKIE_STORAGE.setItem('myCookie', 'something');
        expect(COOKIE_STORAGE.getItem('myCookie')).toEqual('something');
    });

    it('should remove the expected value on calling removeItem function', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `myCookie=${JSON.stringify('dummyCookie')}`
        });
        COOKIE_STORAGE.removeItem('myCookie');
        expect(COOKIE_STORAGE.getItem('myCookie')).toBeNull();
    });

    it('should clear all values on calling clear function', () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `myCookie=${JSON.stringify('dummyCookie')}`
        });
        COOKIE_STORAGE.clear();
        expect(COOKIE_STORAGE.getItem('myCookie')).toBeNull();
    });
});
