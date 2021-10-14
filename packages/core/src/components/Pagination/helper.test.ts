import { paginator } from './helper';

describe('Paginator function', () => {
    it('should return expected result when active page is less than 1', () => {
        expect(paginator(50, 0)).toEqual({
            currentPage: 1,
            linkItems: [1, 2, 3],
            totalPages: 3
        });
    });

    it('should return expected result when when active page is greater than total pages', () => {
        expect(paginator(50, 10)).toEqual({
            currentPage: 3,
            linkItems: [1, 2, 3],
            totalPages: 3
        });
    });

    it('should return expected result when only totalItems count is given', () => {
        expect(paginator(50)).toEqual({
            currentPage: 1,
            linkItems: [1, 2, 3],
            totalPages: 3
        });
    });

    it('should return expected result when currentPage is near the middle of pageRangeDisplayed', () => {
        expect(paginator(150, 3, 20)).toEqual({
            currentPage: 3,
            linkItems: [1, 2, 3, 4, '...', 8],
            totalPages: 8
        });
    });

    it('should return expected result when currentPage is first or last page', () => {
        expect(paginator(150, 1, 20)).toEqual({
            currentPage: 1,
            linkItems: [1, 2, 3, '...', 8],
            totalPages: 8
        });

        expect(paginator(150, 8, 20)).toEqual({
            currentPage: 8,
            linkItems: [1, '...', 6, 7, 8],
            totalPages: 8
        });
    });

    it('should return expected result when currentPage is the middle page', () => {
        expect(paginator(150, 8, 10)).toEqual({
            currentPage: 8,
            linkItems: [1, '...', 7, 8, 9, '...', 15],
            totalPages: 15
        });
    });

    it('should return expected result when currentPage near by 4 pages to the last page', () => {
        expect(paginator(150, 12, 10)).toEqual({
            currentPage: 12,
            linkItems: [1, '...', 11, 12, 13, 14, 15],
            totalPages: 15
        });
    });
});
