import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Pagination from './Pagination';

const { render, fireEvent, cleanup } = TestUtils;
afterEach(cleanup);

describe('Pagination component', () => {
    it('should render correctly with all the default props', () => {
        const mockOnPageClick = jest.fn();
        const { container } = render(<Pagination totalItems={150} onPageClick={mockOnPageClick} />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const mockOnPageClick = jest.fn();
        const { container } = render(
            <Pagination
                totalItems={150}
                activePage={1}
                itemsPerPage={10}
                pageRangeDisplayed={4}
                hideFirstLastLinks
                hidePrevNextLinks
                onPageClick={mockOnPageClick}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should call onClick handler with correct page number when any page link is clicked', () => {
        const mockOnPageClick = jest.fn();
        const { debug, getByText } = render(<Pagination activePage={3} totalItems={150} onPageClick={mockOnPageClick} />);

        fireEvent.click(getByText('4').closest('button'));

        expect(mockOnPageClick).toBeCalledWith(4);
    });

    it('should call onClick handler with first page when first link is clicked', () => {
        const mockOnPageClick = jest.fn();
        const { debug, getByText } = render(<Pagination activePage={3} totalItems={150} onPageClick={mockOnPageClick} />);

        fireEvent.click(getByText('First').closest('button'));

        expect(mockOnPageClick).toBeCalledWith(1);
    });

    it('should call onClick handler with last page when last link is clicked', () => {
        const mockOnPageClick = jest.fn();
        const { debug, getByText } = render(<Pagination activePage={3} totalItems={150} onPageClick={mockOnPageClick} />);

        fireEvent.click(getByText('Last').closest('button'));

        expect(mockOnPageClick).toBeCalledWith(8);
    });

    it('should call onClick handler with prev page when prev link is clicked', () => {
        const mockOnPageClick = jest.fn();
        const { debug, getByText } = render(<Pagination activePage={3} totalItems={150} onPageClick={mockOnPageClick} />);

        fireEvent.click(getByText('Prev').closest('button'));

        expect(mockOnPageClick).toBeCalledWith(2);
    });

    it('should call onClick handler with next page when next link is clicked', () => {
        const mockOnPageClick = jest.fn();
        const { debug, getByText } = render(<Pagination activePage={3} totalItems={150} onPageClick={mockOnPageClick} />);

        fireEvent.click(getByText('Next').closest('button'));

        expect(mockOnPageClick).toBeCalledWith(4);
    });
});
