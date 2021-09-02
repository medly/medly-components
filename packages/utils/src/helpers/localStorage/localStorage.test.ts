import { LOCAL_STORAGE } from './localStorage';

describe('local storage', () => {
    it('should return the expected value on calling get function', () => {
        localStorage.setItem('dummyKey', JSON.stringify('dummyValue'));
        expect(LOCAL_STORAGE.getItem('dummyKey')).toEqual('dummyValue');
    });

    it('should return parsed value if value is valid object', () => {
        localStorage.setItem('dummyKey', JSON.stringify({ name: 'Dummy' }));
        expect(LOCAL_STORAGE.getItem('dummyKey')).toEqual({ name: 'Dummy' });
    });

    it('should return null if key is not present in local storage', () => {
        expect(LOCAL_STORAGE.getItem('dummy')).toBeNull();
    });

    it('should set the expected value on calling seItem function', () => {
        LOCAL_STORAGE.setItem('dummyKey', 'something');
        expect(LOCAL_STORAGE.getItem('dummyKey')).toEqual('something');
    });

    it('should remove the expected value on calling removeItem function', () => {
        localStorage.setItem('dummyKey', 'dummyValue');
        LOCAL_STORAGE.removeItem('dummyKey');
        expect(LOCAL_STORAGE.getItem('dummyKey')).toBeNull();
    });

    it('should clear all values on calling clear function', () => {
        localStorage.setItem('dummyKey', JSON.stringify('dummyValue'));
        LOCAL_STORAGE.clear();
        expect(LOCAL_STORAGE.getItem('dummyKey')).toBeNull();
    });
});
