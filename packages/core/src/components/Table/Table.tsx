import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { GroupCell, GroupCellTitle } from './GroupCell';
import HeadCell from './HeadCell';
import { addSizeToColumnConfig, changeSize, getGridTemplateColumns } from './helpers';
import Row from './Row';
import { TableStyled } from './Table.styled';
import { ColumnConfig, Props, SortOrder } from './types';

const Table: React.SFC<Props> & WithStyle = props => {
    const [sortedColumnField, setSortedColumnField] = useState('');
    const [data, setData] = useState(props.data);
    const [columnConfigs, setColumnConfigs] = useState(addSizeToColumnConfig(props.columns));

    useEffect(() => {
        setColumnConfigs(addSizeToColumnConfig(props.columns));
    }, [props.columns]);

    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    const handleWidthChange = (width: number, field: string) => setColumnConfigs(changeSize(width, field, columnConfigs));

    const handleSortIconClick = (field: string, order: SortOrder) => {
        setSortedColumnField(field);
        props.onSortIconClick(field, order);
    };

    const getHeadCells = (configs: ColumnConfig[] = columnConfigs, field = '') => {
        const cells: React.ReactElement[] = [];

        configs.forEach(config => {
            return config.children
                ? cells.push(
                      <GroupCell key={config.field} gridTemplateColumns={getGridTemplateColumns(config.children)}>
                          <GroupCellTitle>{config.title}</GroupCellTitle>
                          {getHeadCells(config.children, config.field)}
                      </GroupCell>
                  )
                : cells.push(
                      <HeadCell
                          sortedColumnField={sortedColumnField}
                          frozen={config.frozen}
                          hide={config.hide}
                          sort={config.sort}
                          key={field ? `${field}.${config.field}` : config.field}
                          field={field ? `${field}.${config.field}` : config.field}
                          handleSortIconClick={handleSortIconClick}
                          handleWidthChange={handleWidthChange}
                      >
                          {config.title}
                      </HeadCell>
                  );
        });

        return cells;
    };

    const getRowsCells = (rowData: any, configs: ColumnConfig[] = columnConfigs, field = '') => {
        const cells: React.ReactElement[] = [];

        configs.forEach(config => {
            return config.children
                ? cells.push(
                      <GroupCell key={`${field}.${config.field}`} gridTemplateColumns={getGridTemplateColumns(config.children)}>
                          {getRowsCells(rowData[config.field], config.children, config.field)}
                      </GroupCell>
                  )
                : cells.push(
                      <Cell key={`${config.field}`} hide={config.hide} frozen={config.frozen}>
                          {rowData[config.field]}
                      </Cell>
                  );
        });

        return cells;
    };

    return (
        <TableStyled>
            <Row gridTemplateColumns={getGridTemplateColumns(columnConfigs)}>{getHeadCells()}</Row>
            {data.map((row, i) => {
                return (
                    <Row key={i} gridTemplateColumns={getGridTemplateColumns(columnConfigs)}>
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
