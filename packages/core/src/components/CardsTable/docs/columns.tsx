import { styled } from '@medly-components/utils';
import React from 'react';
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
        color: ${ ({status}: StatusReport) => status === 'Pending' ? 'red': 'inherit' }
    `,
    StatusFormatter: ColumnConfig['component'] = ({data}) => {
        return (
            <StyledDiv>
                <Report status={data}>
                    {data}
                </Report>
                <div>
                    02/24/2020
                </div>
            </StyledDiv>
        );
    };


const columns: ColumnConfig[] = [
    { title: 'Patient Info', field: 'patientInfo', sort: true, component: StatusFormatter },
    { title: 'RxInfo', field: 'rxInfo', sort: true},
    { title: 'Price', field: 'price', sort: true, component: StatusFormatter},
    { title: 'Status', field: 'status', sort: true, component: StatusFormatter},  
];

export default columns;
