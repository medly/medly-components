import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useState } from 'react';
import Body from './Body';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import { TableStyled } from './Table.styled';
import { Props } from './types';

const Table: React.SFC<Props> & WithStyle = props => {
    const { data, onRowClick, onSort } = props;
    const [columns, setColumns] = useState(addSizeToColumnConfig(props.columns));

    useEffect(() => {
        setColumns(addSizeToColumnConfig(props.columns));
    }, [props.columns]);

    return (
        <TableStyled isRowClickable={onRowClick ? true : false}>
            <Head {...{ columns, setColumns, onSort }} />
            <Body {...{ columns, data, onRowClick }} />
        </TableStyled>
    );
};

Table.displayName = 'Table';
Table.Style = TableStyled;

export default Table;
