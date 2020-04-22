import { render } from '@test-utils';
import React from 'react';
import { Body } from './Body'
import { ColumnConfig } from '../types';

describe('Body', () => {
    it('should render cart table body properly', () => {

        const data = [{
            id: 1,
            patientInfo: 'Oli Bob',
            rxInfo: 'Metaformin',
            price: '535.76',
            status: 'Pending'
            
        }];
        const columns: ColumnConfig[] = [
            { title: 'Patient Info', field: 'patientInfo', formatter: 'text-short', sort: true },
            { title: 'RxInfo', field: 'rxInfo', formatter: 'group', sort: true }
        ];

        const onRowClick = jest.fn();
        
        const { container } = render(
        <Body 
            data= {data}
            columns={columns}
            onRowClick={onRowClick}
            rowClickDisableKey="disable"
            uniqueKeyName="124"

         />);
        expect(container).toMatchSnapshot();
    });
});
