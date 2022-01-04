import { fireEvent, render, screen } from '@test-utils';
import Text from '../Text';
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

    describe('keyboard navigation', () => {
        const downArrowKeyPress = (container: HTMLElement) => {
            fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
            fireEvent.keyUp(container, { key: 'ArrowDown', code: 40 });
        };

        const ExpandedRowComponent: TableProps['expandedRowComponent'] = () => <Text>Hello from Accordion</Text>;

        const mockOnRowClick = jest.fn(),
            commonProps = {
                isRowSelectable: true,
                onRowClick: mockOnRowClick
            };

        it('enter key should trigger onRowClick', async () => {
            const { container } = renderTable({
                    ...commonProps
                }),
                table = screen.getByRole('table');

            downArrowKeyPress(table);
            downArrowKeyPress(table);
            downArrowKeyPress(table);
            downArrowKeyPress(table);
            fireEvent.keyDown(table, { key: 'ArrowUp', code: 38 });

            fireEvent.click(container.querySelectorAll('tr')[3]);

            expect(mockOnRowClick).toBeCalledWith({
                age: '42',
                color: 'green',
                id: 3,
                isPassed: true,
                marks: { maths: 4, science: 7 },
                name: 'Christine Lobowski',
                rating: 4
            });
        });

        it('right arrow key should open the collapsible row', async () => {
            renderTable({
                ...commonProps,
                isRowExpandable: true,
                expandedRowComponent: ExpandedRowComponent
            });

            const table = screen.getByRole('table');

            downArrowKeyPress(table);
            fireEvent.keyDown(table, { key: 'ArrowRight', code: 39 });

            expect(screen.getByText('Hello from Accordion')).toBeInTheDocument();
        });

        it('left arrow key should close the collapsible row', async () => {
            renderTable({
                ...commonProps,
                isRowExpandable: true,
                expandedRowComponent: ExpandedRowComponent
            });

            const table = screen.getByRole('table');

            downArrowKeyPress(table);
            fireEvent.keyDown(table, { key: 'ArrowRight', code: 39 });
            fireEvent.keyDown(table, { key: 'ArrowLeft', code: 37 });

            expect(screen.queryByText('Hello from Accordion')).not.toBeInTheDocument();
        });

        it('space key should select the row', async () => {
            const onRowSelectionFn = jest.fn();
            renderTable({
                ...commonProps,
                onRowSelection: onRowSelectionFn,
                isRowSelectable: true
            });
            const table = screen.getByRole('table');

            downArrowKeyPress(table);
            downArrowKeyPress(table);
            downArrowKeyPress(table);
            downArrowKeyPress(table);
            fireEvent.click(document.activeElement as HTMLInputElement);

            expect(onRowSelectionFn).toBeCalledTimes(1);
        });
    });
});
