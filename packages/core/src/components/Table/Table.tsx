import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import Body from './Body';
import Cell from './Cell';
import { Head, HeadCell } from './Head';
import Row from './Row';
import { TableStyled } from './Table.styled';
import { Props } from './types';

const Table: React.SFC<Props> & WithStyle = props => {
    const [columnConfig, setColumnConfig] = useState(props.columns.map(col => ({ key: col.title, size: 'minmax(150px, 1fr)' })));

    const handleWidthChange = (width, key) => {
        const temp = [...columnConfig];
        temp.find(col => col.key === key).size = `minmax(${width}px, 1fr)`;
        setColumnConfig(temp);
    };

    const headCells = props.columns.map(col => (
        <HeadCell handleWidthChange={handleWidthChange} key={col.title} title={col.title}>
            {col.title}
        </HeadCell>
    ));

    const rows = props.data.map((row, i) => {
        return (
            <Row key={i}>
                {props.columns.map(col => (
                    <Cell key={col.field}>{row[col.field]}</Cell> // tslint:disable-line
                ))}
            </Row>
        );
    });

    return (
        <TableStyled gridTemplateColumns={columnConfig.reduce((acc, curr) => `${acc} ${curr.size}`, ``)}>
            <Head>{headCells}</Head>
            <Body>{rows}</Body>
        </TableStyled>
    );
};

Table.displayName = 'Table';
Table.Style = TableStyled;

export default Table;
