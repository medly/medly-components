import { fireEvent, render, screen } from '@test-utils';
import Text from '../Text';
import testColumns from './docs/columns';
import testData from './docs/data';
import { Table } from './Table';
import { TableProps } from './types';

const renderTable = (props?: Partial<TableProps>) => render(<Table data={testData} columns={testColumns} {...props} />),
    ExpandedRowComponent: TableProps['expandedRowComponent'] = () => <Text>Hello from Accordion</Text>,
    downArrowKeyPress = (container: HTMLElement) => {
        fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
        fireEvent.keyUp(container, { key: 'ArrowDown', code: 40 });
    };

describe('Table component', () => {
    it('should render properly', () => {
        const { container } = renderTable();
        expect(container).toMatchSnapshot();
    });

    it('should render no result row', () => {
        renderTable({
            data: [],
            noResultRow: <div>NO RESULT CUSTOM COMPONENT</div>
        });
        expect(screen.getByText('NO RESULT CUSTOM COMPONENT')).toBeInTheDocument();
    });

    it('should render no result row text', () => {
        renderTable({
            data: [],
            noResultRowText: 'No Result Row Text'
        });
        expect(screen.getByText('No Result Row Text')).toBeInTheDocument();
    });

    it('should render HiddenDiv containing HTML tags as plain text', () => {
        const xssPayload = [
            {
                id: 8,
                name: 'Albus Dumbledore',
                age: '12',
                color: 'red,green',
                rating: '<img src=x onerror=confirm`1`>',
                isPassed: true,
                marks: {
                    maths: 6,
                    science: 4
                }
            }
        ];
        const { container } = renderTable({
            data: xssPayload
        });
        expect(container).toMatchSnapshot();
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
        const mockOnRowClick = jest.fn(),
            commonProps = {
                isRowSelectable: true,
                onRowClick: mockOnRowClick
            };

        it('enter key should trigger onRowClick', () => {
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

        it('right arrow key should open the collapsible row', () => {
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

        it('left arrow key should close the collapsible row', () => {
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

        it('space key should select the row', () => {
            const onRowSelectionFn = jest.fn();
            renderTable({
                ...commonProps,
                isRowSelectable: true,
                onRowSelection: onRowSelectionFn
            });

            const table = screen.getByRole('table');
            const tableRow = table.querySelectorAll('tr');
            const checkbox = tableRow[1].querySelector('input[type="checkbox"]');

            fireEvent.keyDown(checkbox!, { key: ' ', code: 32 });

            expect(onRowSelectionFn).toBeCalledTimes(1);
        });

        it('custom selection key should select the row when passed as keybinding', () => {
            const onRowSelectionFn = jest.fn();
            renderTable({
                ...commonProps,
                isRowSelectable: true,
                keyBindings: {
                    selectRow: 'x'
                },
                onRowSelection: onRowSelectionFn
            });
            const table = screen.getByRole('table');
            const tableRow = table.querySelectorAll('tr');
            const checkbox = tableRow[2].querySelector('input[type="checkbox"]');

            fireEvent.keyDown(checkbox!, { key: 'x', code: 88 });

            expect(onRowSelectionFn).toBeCalledTimes(1);
        });

        it('should call onRowNavigated for the navigated row', () => {
            const mockOnRowNavigated = jest.fn();
            const { rerender } = render(<Table data={testData} columns={testColumns} rowCursor={1} onRowNavigated={mockOnRowNavigated} />);

            expect(mockOnRowNavigated).toBeCalledWith({
                age: '1',
                color: 'green',
                id: 2,
                isPassed: true,
                marks: {
                    maths: 4,
                    science: 7
                },
                name: 'Mary May',
                rating: 4
            });

            rerender(<Table data={testData} columns={testColumns} rowCursor={2} onRowNavigated={mockOnRowNavigated} />);

            expect(mockOnRowNavigated).toBeCalledWith({
                age: '42',
                color: 'green',
                id: 3,
                isPassed: true,
                marks: {
                    maths: 4,
                    science: 7
                },
                name: 'Christine Lobowski',
                rating: 4
            });
        });
    });

    describe('accordion', () => {
        it('should render table with accordion', () => {
            renderTable({
                isRowExpandable: true,
                expandedRowComponent: ExpandedRowComponent
            });

            const table = screen.getByRole('table');

            downArrowKeyPress(table);
            fireEvent.keyDown(table, { key: 'ArrowRight', code: 39 });

            expect(screen.getByText('Hello from Accordion')).toBeInTheDocument();
        });

        it('should render table with default expanded row', () => {
            renderTable({
                isRowExpandable: true,
                defaultRowExpandKey: 'expanded',
                expandedRowComponent: ExpandedRowComponent,
                data: [{ ...testData[0], expanded: true }, ...testData.slice(1)]
            });
            expect(screen.getByText('Hello from Accordion')).toBeInTheDocument();
        });
    });
});
