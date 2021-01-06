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

    it('should render no result row', () => {
        const { queryByText } = renderTable({
            data: [],
            noResultRow: (
                <tr>
                    <div>NO RESULT CUSTOM COMPONENT</div>
                </tr>
            )
        });
        expect(queryByText('NO RESULT CUSTOM COMPONENT')).toBeInTheDocument();
    });

    describe('pagination', () => {
        const mockOnPageChange = jest.fn(),
            commonProps = {
                withPagination: true,
                totalItems: 300,
                itemsPerPage: 10,
                defaultActivePage: 1,
                onPageChange: mockOnPageChange
            };

        it('should call onPageChange prop on click on any page', () => {
            const { container } = renderTable({ ...commonProps, defaultActivePage: 2 });
            expect(container).toMatchSnapshot();
            // @ts-ignore
            fireEvent.click(screen.getByRole('heading', { level: 5, name: '3' }));
            expect(mockOnPageChange).toBeCalledWith({
                activePage: 3,
                sortOrder: 'desc'
            });
        });

        it('should display 1 to 5 in results text if total entries is less than items per page', () => {
            const { queryByText } = renderTable({ ...commonProps, totalItems: 5 });
            expect(queryByText('1 - 5')).toBeInTheDocument();
        });

        it('should display 1 to 10 in results text if total entries is greater than items per page', () => {
            const { queryByText } = renderTable({
                ...commonProps,
                totalItems: 50,
                itemsPerPage: 10
            });
            expect(queryByText('1 - 10')).toBeInTheDocument();
            expect(queryByText('50')).toBeInTheDocument();
        });
    });
});
