import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import Cell from './Cell';
import { GroupCell, GroupCellTitle } from './GroupCell';
import HeadCell from './HeadCell';
import { addSizeToColumnConfig, changeSize, getGridTemplateColumns } from './helpers';
import Row from './Row';
import { TableStyled } from './Table.styled';
import { ColumnConfig, Props } from './types';

const Table: React.SFC<Props> & WithStyle = props => {
    const [columnConfig, setColumnConfig] = useState(addSizeToColumnConfig(props.columns));

    const handleWidthChange = (width: number, title: string) => {
        const newColumnConfig = changeSize(width, title, columnConfig);
        setColumnConfig(newColumnConfig);
    };

    const getHeadCells = (config: ColumnConfig[] = columnConfig, key = '') => {
        const cells: React.ReactElement[] = [];

        config.forEach(col => {
            return col.children
                ? cells.push(
                      <GroupCell gridTemplateColumns={getGridTemplateColumns(col.children)}>
                          <GroupCellTitle>{col.title}</GroupCellTitle>
                          {getHeadCells(col.children, col.title)}
                      </GroupCell>
                  )
                : cells.push(
                      <HeadCell frozen={col.frozen} title={key ? `${key}.${col.title}` : col.title} handleWidthChange={handleWidthChange}>
                          {col.title}
                      </HeadCell>
                  );
        });

        return cells;
    };

    const getRowsCells = (data: any, config: ColumnConfig[] = columnConfig, field = '') => {
        const cells: React.ReactElement[] = [];

        config.forEach(col => {
            return col.children
                ? cells.push(
                      <GroupCell gridTemplateColumns={getGridTemplateColumns(col.children)}>
                          {getRowsCells(data[col.field], col.children, col.field)}
                      </GroupCell>
                  )
                : cells.push(<Cell frozen={col.frozen}>{data[col.field]}</Cell>);
        });

        return cells;
    };

    return (
        <TableStyled>
            <Row gridTemplateColumns={getGridTemplateColumns(columnConfig)}>{getHeadCells()}</Row>
            {props.data.map((row, i) => {
                return (
                    <Row key={i} gridTemplateColumns={getGridTemplateColumns(columnConfig)}>
                        {getRowsCells(row)}
                    </Row>
                );
            })}
        </TableStyled>
    );
};

Table.displayName = 'Table';
Table.Style = TableStyled;

export default Table;
