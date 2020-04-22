import { render } from '@test-utils';
import React from 'react';
import { CardsTable } from './CardsTable'
import { ColumnConfig } from './types';

describe('CardsTable', () => {
    it('should render CardsTable of cards table properly', () => {        
        const onSort = jest.fn(),
            onRowClick = jest.fn(),
            columns: ColumnConfig[] = [
            { title: 'Patient Info', field: 'patientInfo', sort: true },
            { title: 'RxInfo', field: 'rxInfo', sort: true }
        ];
        const data = [{
            id: 1,
            patientInfo: 'Oli Bob',
            rxInfo: 'Metaformin',
            price: '535.76',
            status: 'Pending'
            
        }];
        
        const { container } = render(<CardsTable 
            data={data}
            onSort={onSort}
            columns={columns}
            onRowClick={onRowClick}
            rowClickDisableKey='disable'
            uniqueKeyName='123'

         />);
        expect(container).toMatchSnapshot();
    });
});
