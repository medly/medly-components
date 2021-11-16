import { fireEvent, render } from '@test-utils';
import { ColumnConfig } from '../types';
import { Head } from './Head';

const patientColumns: ColumnConfig[] = [
        { title: 'Patient Info', field: 'patientInfo', sortable: true },
        { title: 'RxInfo', field: 'rxInfo', sortable: true }
    ],
    renderer = ({ withWhiteBackground = false, onSort = jest.fn(), columns = patientColumns }) =>
        render(
            <table>
                <Head onSort={onSort} columns={columns} withWhiteBackground={withWhiteBackground} />
            </table>
        );

describe('Card Table Head', () => {
    it('should render properly with dark background', () => {
        const { container } = renderer({ withWhiteBackground: false });
        expect(container).toMatchSnapshot();
    });

    it('should render properly with light background', () => {
        const { container } = renderer({ withWhiteBackground: true });
        expect(container).toMatchSnapshot();
    });

    it('should call onSort when clicked on sorting icon', () => {
        const mockOnSortChange = jest.fn(),
            { container } = renderer({ onSort: mockOnSortChange });

        fireEvent.click(container.querySelectorAll('svg')[0]);
        expect(mockOnSortChange).toHaveBeenCalledWith('patientInfo', 'asc');
    });
});
