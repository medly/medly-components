import { render, fireEvent } from '@test-utils';
import React from 'react';
import { Head } from './Head'
import { ColumnConfig } from '../types';

describe('Head', () => {
    const columns: ColumnConfig[] = [
        { title: 'Patient Info', field: 'patientInfo', sort: true },
        { title: 'RxInfo', field: 'rxInfo', sort: true }
    ];

    it('should render Head of cards table properly', () => {
        const onSort = jest.fn();
        
        const { container } = render(<Head 
            onSort={onSort}
            columns={columns}

         />);
        expect(container).toMatchSnapshot();
    });

    it('should call onSort when clicked on sorting icon', () => {
        const mockOnSortChange = jest.fn();
        const { container } = render(
            <Head onSort={mockOnSortChange} columns={columns} />
        );
        
        fireEvent.click(container.querySelectorAll('svg')[0]);
        
        expect(mockOnSortChange).toHaveBeenCalled();
    });
});
