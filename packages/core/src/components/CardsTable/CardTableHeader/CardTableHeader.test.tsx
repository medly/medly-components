import { render } from '@test-utils';
import React from 'react';
import { CardTableHeader } from './CardTableHeader'
import { ColumnConfig } from '../types';

describe('CardTableHeader', () => {
    it('should render CardTableHeader of cards table properly', () => {

        const onSort = jest.fn(),
        columns: ColumnConfig[] = [
            { title: 'Patient Info', field: 'patientInfo', formatter: 'text-short', sort: true },
            { title: 'RxInfo', field: 'rxInfo', formatter: 'group', sort: true }
        ];
        const { container } = render(<CardTableHeader 
            onSort={onSort}
            columns={columns}

         />);
        expect(container).toMatchSnapshot();
    });
});
