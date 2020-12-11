import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import testColumns from './docs/columns';
import testData from './docs/data';
import { Table } from './Table';
import { TableProps } from './types';

const renderTable = (props?: Partial<TableProps>) => render(<Table data={testData} columns={testColumns} {...props} />);

describe('Table component', () => {
    it('should render properly', () => {
        const { container } = renderTable();
        expect(container).toMatchSnapshot();
    });

    describe('pagination', () => {
        it('should call onPageChange prop on click on any page', () => {
            const mockOnPageChange = jest.fn();
            const { container } = renderTable({
                withPagination: true,
                totalItems: 300,
                itemsPerPage: 10,
                defaultActivePage: 2,
                onPageChange: mockOnPageChange
            });
            expect(container).toMatchSnapshot();
            // @ts-ignore
            fireEvent.click(screen.getByRole('heading', { level: 5, name: '3' }));
            expect(mockOnPageChange).toBeCalledWith({
                activePage: 3,
                sortOrder: 'desc'
            });
        });
    });
});
