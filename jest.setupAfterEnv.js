import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

window.HTMLElement.prototype.scrollIntoView = function () {};

const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
