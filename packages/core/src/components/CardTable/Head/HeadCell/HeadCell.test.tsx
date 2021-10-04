import { fireEvent, render } from '@test-utils';
import React from 'react';
import { ColumnConfig } from '../../types';
import { HeadCell } from './HeadCell';
import { StyledProps } from './types';

const dummyColumn: ColumnConfig = { title: 'Demo', field: 'demo', sortable: true },
    renderer = ({ withWhiteBackground = false, sortField = 'random', onSortChange = jest.fn(), column = dummyColumn }) =>
        render(
            <table>
                <thead>
                    <tr>
                        <HeadCell
                            sortField={sortField}
                            onSortChange={onSortChange}
                            withWhiteBackground={withWhiteBackground}
                            column={column}
                        />
                    </tr>
                </thead>
            </table>
        );

describe('Card Table HeadCell', () => {
    it('should render properly with dark background and dropdown icon by default', () => {
        const { container } = renderer({ withWhiteBackground: false, column: { title: 'Demo', field: 'demo' } });
        expect(container).toMatchSnapshot();
    });

    it('should render properly with light background and dropdown icon by default', () => {
        const { container } = renderer({ withWhiteBackground: true });
        expect(container).toMatchSnapshot();
    });

    it('should render properly with hover state', () => {
        const { container, getByText } = renderer({ withWhiteBackground: true });
        fireEvent.mouseEnter(getByText('Demo'));
        expect(container).toMatchSnapshot();
    });

    it('should call onSortChange with asc order when clicked on sorting icon', () => {
        const mockOnSortChange = jest.fn(),
            { container } = renderer({ onSortChange: mockOnSortChange, sortField: 'demo' });

        fireEvent.click(container.querySelectorAll('svg')[0]);
        expect(container).toMatchSnapshot();
        expect(mockOnSortChange).toHaveBeenCalledWith('demo', 'asc');
    });

    it('should call onSortChange with desc order when clicked on sorting icon', () => {
        const mockOnSortChange = jest.fn(),
            { container } = renderer({ onSortChange: mockOnSortChange, sortField: 'demo' });

        fireEvent.click(container.querySelectorAll('svg')[0]);
        fireEvent.click(container.querySelectorAll('svg')[0]);
        expect(container).toMatchSnapshot();
        expect(mockOnSortChange).toHaveBeenCalledWith('demo', 'desc');
    });

    const positions: Required<StyledProps>['align'][] = ['left', 'center', 'right'];

    test.each(positions)('should be able to %p align ', align => {
        const column: ColumnConfig = {
                align,
                title: 'Column 1',
                field: 'column1'
            },
            { container } = renderer({ column });
        expect(container).toMatchSnapshot();
    });
});
