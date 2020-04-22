import React, { useCallback } from 'react';
import Text from '../../../Text';
import { Props } from './types';
import * as Style from './Cell.styled';
import { WithStyle } from '@medly-components/utils/src';



export const Cell: React.SFC<Props> & WithStyle = React.memo(props => {
    const {
            data,
            rowId,
            column,
            isRowClickDisabled,
        } = props
    const formattedCell = useCallback(() => {
            switch (column.formatter) {
                case 'boolean':
                    return <Text> {data} </Text>;
                case 'react-component': {
                    const Component = column.component;
                    return (
                        <Component {...{ data, rowId, disabled: isRowClickDisabled }} />
                    );
                }
                default:
                    return <Text>{data}</Text>;
            }
        }, [data, rowId, isRowClickDisabled, column]);


    return (
        <Style.CellContent variant="flat" flowDirection="vertical" alignItems="left" >
            {formattedCell()}
        </Style.CellContent>
    );
});
Cell.displayName = 'Cell';
