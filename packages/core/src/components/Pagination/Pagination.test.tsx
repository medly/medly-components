import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
    const renderer = (props: any = { totalItems: 0 }) => {
        const mockOnPageClick = jest.fn();
        return {
            mockOnPageClick,
            ...render(<Pagination {...props} onPageClick={mockOnPageClick} />)
        };
    };

    afterEach(cleanup);

    it('should render correctly with all the default props', () => {
        const { container } = renderer({ totalItems: 150 });
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when total items is 0', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = renderer({ totalItems: 150, activePage: 1, itemsPerPage: 10, hidePrevNextLinks: true });
        expect(container).toMatchSnapshot();
    });

    it('should call onClick handler with correct page number when any page link is clicked', () => {
        const { getByRole, mockOnPageClick } = renderer({ totalItems: 150, activePage: 3, itemsPerPage: 10 });
        fireEvent.click(getByRole('button', { name: '4' }));
        expect(mockOnPageClick).toBeCalledWith(4);
    });

    it('should call onClick handler with first page when first page is clicked', () => {
        const { getByRole, mockOnPageClick } = renderer({ totalItems: 150, activePage: 3, itemsPerPage: 10 });
        fireEvent.click(getByRole('button', { name: '1' }));
        expect(mockOnPageClick).toBeCalledWith(1);
    });

    it('should call onClick handler with last page when last page is clicked', () => {
        const { getByRole, mockOnPageClick } = renderer({ totalItems: 150, activePage: 3, itemsPerPage: 10 });
        fireEvent.click(getByRole('button', { name: '15' }));
        expect(mockOnPageClick).toBeCalledWith(15);
    });

    it('should call onClick handler with prev page when prev link is clicked', () => {
        const { mockOnPageClick, getByTitle } = renderer({ totalItems: 150, activePage: 3, itemsPerPage: 10 });
        fireEvent.click(getByTitle('prev'));
        expect(mockOnPageClick).toBeCalledWith(2);
    });

    it('should call onClick handler with next page when next link is clicked', () => {
        const { mockOnPageClick, getByTitle } = renderer({ totalItems: 150, activePage: 3, itemsPerPage: 10 });
        fireEvent.click(getByTitle('next'));
        expect(mockOnPageClick).toBeCalledWith(4);
    });

    it('should call onClick handler with expected page when selected from ellipsis popover', () => {
        const { mockOnPageClick, getByRole } = renderer({ totalItems: 150, activePage: 3, itemsPerPage: 10 });
        fireEvent.click(getByRole('button', { name: '...' }));
        fireEvent.click(getByRole('button', { name: '7' }));
        expect(mockOnPageClick).toBeCalledWith(7);
    });

    it('should not call onClick handler when clicked on active page', () => {
        const { mockOnPageClick, getByRole } = renderer({ totalItems: 150, activePage: 3, itemsPerPage: 10 });
        fireEvent.click(getByRole('button', { name: '3' }));
        expect(mockOnPageClick).not.toBeCalled();
    });
});
