import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
const nodeCrypto = require('crypto');

window.HTMLElement.prototype.scrollIntoView = function () {};
window.crypto = {
    getRandomValues: function (buffer) {
        return nodeCrypto.randomFillSync(buffer);
    }
};

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
