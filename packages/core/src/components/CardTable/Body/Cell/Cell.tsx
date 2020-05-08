import { WithStyle } from '@medly-components/utils';
import React, { useMemo } from 'react';
import Text from '../../../Text';
import * as Style from './Cell.styled';
import { Props } from './types';

export const Cell: React.SFC<Props> & WithStyle = React.memo(props => {
    const { data, rowId, column, isRowClickDisabled } = props,
        { component: Component, align } = column;

    const FormattedCell = useMemo(
        () => (Component ? <Component {...{ data, rowId, disabled: isRowClickDisabled }} /> : <Text>{data}</Text>),
        [data, rowId, isRowClickDisabled, Component]
    );

    return <Style.Cell align={align}>{FormattedCell}</Style.Cell>;
});
Cell.displayName = 'Cell';
