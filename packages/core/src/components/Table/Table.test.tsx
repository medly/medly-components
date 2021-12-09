import { fireEvent, render, screen } from '@test-utils';
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
        renderTable({
            data: [],
            noResultRow: (
                <tr>
                    <div>NO RESULT CUSTOM COMPONENT</div>
                </tr>
            )
        });
        expect(screen.getByText('NO RESULT CUSTOM COMPONENT')).toBeInTheDocument();
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

        it('should call onPageChange prop on click on any page', async () => {
            const { container } = renderTable({ ...commonProps, defaultActivePage: 1 });
            expect(container).toMatchSnapshot();
            fireEvent.click(screen.getByText('30'));
            expect(mockOnPageChange).toBeCalledWith({
                activePage: 30,
                sortOrder: 'desc'
            });
        });

        it('should display 1 to 5 in results text if total entries is less than items per page', () => {
            renderTable({ ...commonProps, totalItems: 5 });
            expect(screen.getByText('1 - 5')).toBeInTheDocument();
        });

        it('should display 1 to 18 in results text if total entries is less than items per page * no of page', () => {
            renderTable({ ...commonProps, totalItems: 18, defaultActivePage: 2 });
            expect(screen.getByText('11 - 18')).toBeInTheDocument();
        });

        it('should display 1 to 10 in results text if total entries is greater than items per page', () => {
            renderTable({
                ...commonProps,
                totalItems: 50,
                itemsPerPage: 10
            });
            expect(screen.getByText('1 - 10')).toBeInTheDocument();
            expect(screen.getByText('50')).toBeInTheDocument();
        });
    });
});
