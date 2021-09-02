import { SESSION_STORAGE } from './sessionStorage';

describe('session storage', () => {
    it('should return the expected value on calling get function', () => {
        sessionStorage.setItem('dummyKey', JSON.stringify('dummyValue'));
        expect(SESSION_STORAGE.getItem('dummyKey')).toEqual('dummyValue');
    });

    it('should return parsed value if value is valid object', () => {
        sessionStorage.setItem('dummyKey', JSON.stringify({ name: 'Dummy' }));
        expect(SESSION_STORAGE.getItem('dummyKey')).toEqual({ name: 'Dummy' });
    });

    it('should return null if key is not present in session storage', () => {
        expect(SESSION_STORAGE.getItem('dummy')).toBeNull();
    });

    it('should set the expected value on calling seItem function', () => {
        SESSION_STORAGE.setItem('dummyKey', 'something');
        expect(SESSION_STORAGE.getItem('dummyKey')).toEqual('something');
    });

    it('should remove the expected value on calling removeItem function', () => {
        sessionStorage.setItem('dummyKey', JSON.stringify('dummyValue'));
        SESSION_STORAGE.removeItem('dummyKey');
        expect(SESSION_STORAGE.getItem('dummyKey')).toBeNull();
    });

    it('should clear all values on calling clear function', () => {
        sessionStorage.setItem('dummyKey', JSON.stringify('dummyValue'));
        SESSION_STORAGE.clear();
        expect(SESSION_STORAGE.getItem('dummyKey')).toBeNull();
    });
});
