import { render } from '@testing-library/react';
import React from 'react';
import Text from '../../../Text';
import { ColumnConfig } from '../../types';
import { Cell } from './Cell';

const renderer = (columnConfig: ColumnConfig) =>
    render(
        <table>
            <tbody>
                <tr>
                    <Cell column={columnConfig} data="text" rowId="1" />
                </tr>
            </tbody>
        </table>
    );

describe('CardTable Cell', () => {
    it('should render cell with text properly', () => {
        const { container } = renderer({
            title: 'Column 1',
            field: 'column1'
        });
        expect(container).toMatchSnapshot();
    });

    it('should render cell with component properly', () => {
        const config: ColumnConfig = {
                title: 'Column 1',
                field: 'column1',
                component: Text
            },
            { container } = renderer(config);
        expect(container).toMatchSnapshot();
    });

    test.each(['left', 'center', 'right'])('should be able to %p align ', (align: 'left' | 'center' | 'right') => {
        const { container } = renderer({
            align,
            title: 'Column 1',
            field: 'column1'
        });
        expect(container).toMatchSnapshot();
    });
});
