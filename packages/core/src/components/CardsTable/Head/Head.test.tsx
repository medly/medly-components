import { render } from '@test-utils';
import React from 'react';
import { Head } from './Head'
import { ColumnConfig } from '../types';

describe('Head', () => {
    it('should render Head of cards table properly', () => {

        const onSort = jest.fn(),
        columns: ColumnConfig[] = [
            { title: 'Patient Info', field: 'patientInfo', formatter: 'text-short', sort: true },
            { title: 'RxInfo', field: 'rxInfo', formatter: 'group', sort: true }
        ];
        const { container } = render(<Head 
            onSort={onSort}
            columns={columns}

         />);
        expect(container).toMatchSnapshot();
    });
});
