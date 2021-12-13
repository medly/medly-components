import { fireEvent, render, screen, waitFor } from '@test-utils';
import testColumns from '../docs/columns';
import testData from '../docs/data';
import { Table } from '../Table';
import { TableProps } from '../types';
import { Foot } from './Foot';
import { TableFootProps } from './types';

const renderTable = (props?: Partial<TableProps>) =>
    render(
        <Table
            size="XS"
            withPagination
            onPageChange={props?.onPageChange}
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

    test.each(options)('should render correctly with %s size', size => {
        const { container } = render(<Foot tableSize={size} />);
        expect(container).toMatchSnapshot();
    });

    it('should update content on click on next button', async () => {
        const onPageChange = jest.fn();
        renderTable({ onPageChange });
        fireEvent.click(screen.getByTitle(/next/i));
        await waitFor(() => expect(onPageChange).toHaveBeenCalledTimes(1));
        expect(screen.getByText(/11 - 15/i)).toBeInTheDocument();
    });

    it('should render properly when showRowWithCardStyle is set to true', () => {
        renderTable({ showRowWithCardStyle: true });
        expect(document.body.querySelector('tfoot')).toHaveStyle('min-height:5.4rem');
    });

    it('should render properly when showRowWithCardStyle is set to false', () => {
        renderTable({ showRowWithCardStyle: false });
        expect(document.body.querySelector('tfoot')).toHaveStyle('min-height:4rem');
    });
});
