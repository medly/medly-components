import { paginator } from './helper';

describe('Paginator function', () => {
    it('should return expected result when active page is less than 1', () => {
        expect(paginator(50, 0)).toEqual({
            currentPage: 1,
            startPage: 1,
            endPage: 3,
            totalPages: 3
        });
    });

    it('should return expected result when when active page is greater than total pages', () => {
        expect(paginator(50, 10)).toEqual({
            currentPage: 3,
            startPage: 1,
            endPage: 3,
            totalPages: 3
        });
    });

    it('should return expected result when only totalItems count is given', () => {
        expect(paginator(50)).toEqual({
            currentPage: 1,
            startPage: 1,
            endPage: 3,
            totalPages: 3
        });
    });

    it('should return expected result when currentPage plus maxPagesAfterCurrentPage is greater than or equal to totalPages', () => {
        expect(paginator(150, 8, 20, 5)).toEqual({
            currentPage: 8,
            startPage: 4,
            endPage: 8,
            totalPages: 8
        });
    });

    it('should return expected result when currentPage is less than maxPagesBeforeCurrentPage', () => {
        expect(paginator(150, 2, 20, 5)).toEqual({
            currentPage: 2,
            startPage: 1,
            endPage: 5,
            totalPages: 8
        });
    });

    it('should return expected result when currentPage is near the middle of pageRangeDisplayed', () => {
        expect(paginator(150, 3, 20, 5)).toEqual({
            currentPage: 3,
            startPage: 1,
            endPage: 5,
            totalPages: 8
        });
    });
});
