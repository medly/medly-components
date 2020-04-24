import { render } from '@testing-library/react';
import React from 'react';
import Text from '../../../Text';
import { ColumnConfig } from '../../types';
import { Cell } from './Cell';

describe('Cell', () => {
    const columnConfig: ColumnConfig = {
        title: 'Column 1',
        field: 'column1'
    };

    it('should render cell with text properly', () => {
        const { container } = render(
            <tr>
                <Cell column={columnConfig} data="text" rowId="1" />
            </tr>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render cell with component properly', () => {
        const config: ColumnConfig = {
            ...columnConfig,
            component: Text
        };
        const { container } = render(
            <tr>
                <Cell column={config} data="text" rowId="1" />
            </tr>
        );
        expect(container).toMatchSnapshot();
    });
});
