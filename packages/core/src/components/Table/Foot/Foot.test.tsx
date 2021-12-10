import { fireEvent, render, screen, waitFor } from '@test-utils';
import testColumns from '../docs/columns';
import testData from '../docs/data';
import { Table } from '../Table';
import { TableProps } from '../types';
import { Foot } from './Foot';
import { TableFootProps } from './types';

const onPageChange = jest.fn(),
    renderTable = (props?: Partial<TableProps>) =>
        render(
            <Table
                onPageChange={onPageChange}
                size="XS"
                withPagination
                defaultActivePage={1}
                totalItems={15}
                itemsPerPage={10}
                data={testData}
                columns={testColumns}
                {...props}
            />
        );

describe('Table Foot', () => {
    const options: TableFootProps['tableSize'][] = ['XS', 'S', 'M', 'L'];

    test.each(options)('should render correctly for %s', size => {
        const { container } = render(<Foot tableSize={size} />);
        expect(container).toMatchSnapshot();
    });

    it('should render table foot with content', () => {
        render(<Foot tableSize="M" />);

        expect(screen.getByText(/viewing/i)).toBeInTheDocument();
        expect(screen.getByText(/0 - 0/i)).toBeInTheDocument();
        expect(screen.getByText(/of/i)).toBeInTheDocument();
        expect(screen.getByText(/results/i)).toBeInTheDocument();
    });

    it('should render table foot with pagination', () => {
        render(<Foot tableSize="M" />);

        expect(screen.getByTestId('foot-pagination')).toBeInTheDocument();
    });

    it('should check table foot pagination', async () => {
        renderTable();

        await fireEvent.click(await screen.findByTitle(/next/i));
        await waitFor(() => expect(onPageChange).toHaveBeenCalledTimes(1));
        expect(await screen.findByText(/11 - 15/i)).toBeInTheDocument();
    });

    it('should check style of table with showRowWithCardStyle true', () => {
        renderTable({ showRowWithCardStyle: true });
        expect(document.body.querySelector('tfoot')).toHaveStyle('min-height:5.4rem');
    });

    it('should check style of table with showRowWithCardStyle false', () => {
        renderTable({ showRowWithCardStyle: false });
        expect(document.body.querySelector('tfoot')).toHaveStyle('min-height:4rem');
    });
});
