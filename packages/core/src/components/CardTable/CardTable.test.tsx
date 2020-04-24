import { render } from '@test-utils';
import React from 'react';
import { CardTable } from './CardTable';
import { ColumnConfig } from './types';

describe('CardTable', () => {
    it('should render CardTable properly', () => {
        const onSort = jest.fn(),
            onRowClick = jest.fn(),
            columns: ColumnConfig[] = [
                { title: 'Patient Info', field: 'patientInfo', sort: true },
                { title: 'RxInfo', field: 'rxInfo', sort: true }
            ];
        const data = [
            {
                id: 1,
                patientInfo: 'Oli Bob',
                rxInfo: 'Metaformin',
                price: '535.76',
                status: 'Pending'
            }
        ];

        const { container } = render(
            <CardTable
                data={data}
                onSort={onSort}
                columns={columns}
                onRowClick={onRowClick}
                rowClickDisableKey="disable"
                uniqueKeyName="123"
            />
        );
        expect(container).toMatchSnapshot();
    });
});
