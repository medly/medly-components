import { fireEvent, render } from '@test-utils';
import React from 'react';
import { ColumnConfig } from '../types';
import { Body } from './Body';

describe('Body', () => {
    const data = [
            {
                id: 1,
                patientInfo: 'Oli Bob',
                rxInfo: 'Metaformin',
                price: '535.76',
                status: 'Pending',
                reported: true
            }
        ],
        columns: ColumnConfig[] = [
            { title: 'Patient Info', field: 'patientInfo', sort: true },
            { title: 'RxInfo', field: 'rxInfo', sort: true }
        ];

    const renderer = (onRowClick = jest.fn(), rowClickDisableKey = '', uniqueKeyName = 'id') =>
        render(
            <table>
                <Body
                    data={data}
                    columns={columns}
                    onRowClick={onRowClick}
                    rowClickDisableKey={rowClickDisableKey}
                    uniqueKeyName={uniqueKeyName}
                />
            </table>
        );

    it('should render card table body properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should call onRowClick on click of a row', () => {
        const mockOnRowClick = jest.fn(),
            { getByText } = renderer(mockOnRowClick);
        fireEvent.click(getByText('Metaformin'));
        expect(mockOnRowClick).toHaveBeenCalled();
    });

    it('should not call onRowClick on click of a row, if we that row is disabled', () => {
        const mockOnRowClick = jest.fn(),
            { getByText } = renderer(mockOnRowClick, 'reported', 'random');
        fireEvent.click(getByText('Metaformin'));
        expect(mockOnRowClick).not.toHaveBeenCalled();
    });
});
