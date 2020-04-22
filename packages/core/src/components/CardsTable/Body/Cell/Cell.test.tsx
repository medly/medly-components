import { render } from '@test-utils';
import React from 'react';
import Text from '../../../Text';
import { ColumnConfig } from '../../types';
import { Cell } from './Cell';


describe('Cell', () => {
    const columnConfig: ColumnConfig = {
        title: 'Column 1',
        field: 'column1',
        formatter: 'boolean'
    };
    
    it('should render text properly', () => {
        const { container } = render(
            <Cell column={columnConfig} data="text" rowId="1">
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

});
