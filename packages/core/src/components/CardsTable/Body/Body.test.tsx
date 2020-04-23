import { render, fireEvent } from '@test-utils';
import React from 'react';
import { Body } from './Body'
import { ColumnConfig } from '../types';

describe('Body', () => {

    const data = [{
        id: 1,
        patientInfo: 'Oli Bob',
        rxInfo: 'Metaformin',
        price: '535.76',
        status: 'Pending'
        
    }];
    const columns: ColumnConfig[] = [
        { title: 'Patient Info', field: 'patientInfo', sort: true },
        { title: 'RxInfo', field: 'rxInfo', sort: true }
    ];

    const renderer = (onRowClick?: any) => render(
        <Body 
            data= {data}
            columns={columns}
            onRowClick={onRowClick}
            rowClickDisableKey="disable"
            uniqueKeyName="124"

        />
    );

    it('should render cart table body properly', () => {
        const { container } = renderer()
        expect(container).toMatchSnapshot();
    });

    it('should call onRowClick on click of a row', () => {
        const mockOnRowClick = jest.fn();
        const { getByText } = renderer(mockOnRowClick);
        fireEvent.click(getByText('Metaformin'));
        expect(mockOnRowClick).toBeCalled();
    });
});
