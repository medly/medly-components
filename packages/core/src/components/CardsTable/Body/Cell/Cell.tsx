import { WithStyle } from '@medly-components/utils/src';
import React, { useMemo } from 'react';
import Text from '../../../Text';
import * as Style from './Cell.styled';
import { Props } from './types';



export const Cell: React.SFC<Props> & WithStyle = React.memo(props => {
    const {
            data,
            rowId,
            column,
            isRowClickDisabled,
        } = props
    const FormattedCell = useMemo(() => {
    const Component = column.component;
        return Component ? <Component {...{ data, rowId, disabled: isRowClickDisabled }} />
            : <Text >{data}</Text>
    }, [data, rowId, isRowClickDisabled, column]);


    return (
        <Style.CellContent variant="flat" flowDirection="vertical"  alignItems={column.align || 'left'} >
            {FormattedCell}
        </Style.CellContent>
    );
});
Cell.displayName = 'Cell';
