import { fireEvent, render } from '@test-utils';
import { CardTable } from './CardTable';
import { ColumnConfig } from './types';

const transactions = [
        {
            id: 1,
            patientInfo: 'Oli Bob',
            rxInfo: 'Metaformin',
            price: '535.76',
            status: 'Pending'
        }
    ],
    transactionColumnConfig: ColumnConfig[] = [
        { title: 'Patient Info', field: 'patientInfo', sortable: true },
        { title: 'RxInfo', field: 'rxInfo', sortable: true }
    ],
    renderer = ({
        onSort = jest.fn(),
        onRowClick = jest.fn(),
        withWhiteBackground = false,
        data = transactions,
        columns = transactionColumnConfig
    }) =>
        render(
            <CardTable
                data={data}
                onSort={onSort}
                columns={columns}
                onRowClick={onRowClick}
                withWhiteBackground={withWhiteBackground}
                rowClickDisableKey="disable"
                uniqueKeyName="123"
            />
        );

describe('CardTable', () => {
    it('should render properly with grey background', () => {
        const { container } = renderer({ withWhiteBackground: false });
        expect(container).toMatchSnapshot();
    });
    it('should render properly with white background', () => {
        const { container } = renderer({ withWhiteBackground: true });
        expect(container).toMatchSnapshot();
    });
    it('should call onSort with expected data', () => {
        const onSort = jest.fn(),
            { container } = renderer({ withWhiteBackground: true, onSort });
        fireEvent.click(container.querySelectorAll('svg')[0]);
        expect(onSort).toHaveBeenCalledWith('patientInfo', 'asc');
    });
    it('should call onRowClick on click on any row', () => {
        const onRowClick = jest.fn(),
            { getByText } = renderer({ withWhiteBackground: true, onRowClick });
        fireEvent.click(getByText('Oli Bob'));
        expect(onRowClick).toHaveBeenCalled();
    });
});
