import React, { useMemo } from 'react';
import Text from '../../../Text';
import * as Style from './Cell.styled';
import { Props } from './types';

export const Cell: React.FC<Props> = React.memo(props => {
    const { data, rowId, column, isRowClickDisabled, rowData } = props,
        { component: Component, align, wrapText } = column;

    const FormattedCell = useMemo(
        () => (Component ? <Component {...{ data, rowId, rowData, disabled: isRowClickDisabled }} /> : <Text title={data}>{data}</Text>),
        [data, rowId, isRowClickDisabled, Component]
    );

    return (
        <Style.Cell wrapText={wrapText} align={align}>
            {FormattedCell}
        </Style.Cell>
    );
});
Cell.displayName = 'Cell';
