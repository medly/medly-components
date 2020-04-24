import { fireEvent, render } from '@test-utils';
import React from 'react';
import { ColumnConfig } from '../types';
import { Head } from './Head';

describe('Head', () => {
    const columns: ColumnConfig[] = [
        { title: 'Patient Info', field: 'patientInfo', sort: true },
        { title: 'RxInfo', field: 'rxInfo', sort: true }
    ];

    it('should render Head of cards table properly', () => {
        const onSort = jest.fn();

        const { container } = render(
            <table>
                <Head onSort={onSort} columns={columns} withWhiteBackground />
            </table>
        );
        expect(container).toMatchSnapshot();
    });

    it('should call onSort when clicked on sorting icon', () => {
        const mockOnSortChange = jest.fn();
        const { container } = render(
            <table>
                <Head onSort={mockOnSortChange} columns={columns} withWhiteBackground />
            </table>
        );

        fireEvent.click(container.querySelectorAll('svg')[0]);

        expect(mockOnSortChange).toHaveBeenCalled();
    });
});
