import styled from 'styled-components';
import { ColumnConfig } from '../types';

interface StatusReport {
    status: string;
}

const StyledDiv = styled('div')`
        display: flex;
        align-items: left;
        justify-content: left;
        flex-direction: column;
    `,
    Report = styled(`div`)<StatusReport>`
        color: ${({ status }: StatusReport) => (status === 'Pending' ? 'red' : 'inherit')};
    `,
    StatusFormatter: ColumnConfig['component'] = ({ data }) => {
        return (
            <StyledDiv>
                <Report status={data}>{data}</Report>
                <div>02/24/2020</div>
            </StyledDiv>
        );
    };

const columns: ColumnConfig[] = [
    { title: 'Patient Info', field: 'patientInfo', sortable: true, wrapText: false },
    { title: 'RxInfo', field: 'rxInfo', sortable: true, align: 'center' },
    { title: 'Price', field: 'price', sortable: true },
    { title: 'Status', field: 'status', sortable: true, component: StatusFormatter }
];

export default columns;
