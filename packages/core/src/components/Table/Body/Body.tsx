import React from 'react';
import Cell from '../Cell';
import { GroupCell } from '../GroupCell';
import { getGridTemplateColumns } from '../helpers';
import Row from '../Row';
import { ColumnConfig } from '../types';
import { Props } from './types';

const Body: React.SFC<Props> = props => {
    const { data, columns, onRowClick } = props;

    const handleRowClick = (rowData: object) => () => {
        onRowClick && onRowClick(rowData);
    };

    const rowsCells = (rowData: any, configs: ColumnConfig[] = columns, field = '') => {
        const cells: React.ReactElement[] = [];

        configs.forEach(config => {
            return config.children
                ? cells.push(
                      <GroupCell key={`${field}.${config.field}`} gridTemplateColumns={getGridTemplateColumns(config.children)}>
                          {rowsCells(rowData[config.field], config.children, config.field)}
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
        <>
            {data.map((row, id) => {
                return (
                    <Row key={id} onClick={handleRowClick(row)} gridTemplateColumns={getGridTemplateColumns(columns)}>
                        {rowsCells(row)}
                    </Row>
                );
            })}
        </>
    );
};

export default Body;
