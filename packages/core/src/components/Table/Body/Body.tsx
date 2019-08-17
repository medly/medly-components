import React from 'react';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import Cell from '../Cell';
import { GroupCell } from '../GroupCell';
import { getGridTemplateColumns } from '../helpers';
import Row from '../Row';
import { ColumnConfig } from '../types';
import { Props } from './types';

const Body: React.SFC<Props> = props => {
    const { data, columns, onRowClick, selectedRows, onRowSelection } = props;

    const handleRowClick = (rowData: object) => () => onRowClick && onRowClick(rowData),
        stopPropogation = (e: React.MouseEvent) => e.stopPropagation(),
        handleRowSelection = (id: number) => (e: React.FormEvent<HTMLInputElement>) => onRowSelection(id);

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
                          {config.field === 'medly-table-checkbox' ? (
                              <Checkbox
                                  checked={selectedRows.includes(rowData.id)}
                                  onChange={handleRowSelection(rowData.id)}
                                  onClick={stopPropogation}
                                  name="active"
                              />
                          ) : (
                              <Text textSize="M3">{rowData[config.field]}</Text>
                          )}
                      </Cell>
                  );
        });

        return cells;
    };

    return (
        <>
            {data.map((row, index) => {
                return (
                    <Row key={row.id || index} onClick={handleRowClick(row)} gridTemplateColumns={getGridTemplateColumns(columns)}>
                        {rowsCells(row)}
                    </Row>
                );
            })}
        </>
    );
};

export default Body;
