import React from 'react';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import Cell from '../Cell';
import { GroupCell } from '../GroupCell';
import { getGridTemplateColumns } from '../helpers';
import Row, { NoResultStyled } from '../Row';
import { ColumnConfig } from '../types';
import { Props } from './types';

const Body: React.SFC<Props> = React.memo(props => {
    const { data, columns, onRowClick, selectedRows, onRowSelection } = props;

    const handleRowClick = (rowData: object) => () => onRowClick && onRowClick(rowData),
        stopPropogation = (e: React.MouseEvent) => e.stopPropagation(),
        handleRowSelection = (id: number) => (e: React.FormEvent<HTMLInputElement>) => onRowSelection(id);

    const getRow = (rowData: any, configs: ColumnConfig[] = columns, field = '') => {
        const cells: React.ReactElement[] = [];

        configs.forEach(config => {
            const fieldName = `${field && `${field}.`}${config.field}`;

            return config.children
                ? cells.push(
                      <GroupCell key={fieldName} hide={config.hide} gridTemplateColumns={getGridTemplateColumns(config.children)}>
                          {getRow(rowData[config.field], config.children, config.field)}
                      </GroupCell>
                  )
                : cells.push(
                      <Cell key={fieldName} hide={config.hide} frozen={config.frozen}>
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

    if (data.length === 0) {
        return (
            <NoResultStyled>
                <Text textSize="M3">No result</Text>
            </NoResultStyled>
        );
    }

    return (
        <>
            {data.map((row, index) => {
                return (
                    <Row key={row.id || index} onClick={handleRowClick(row)} gridTemplateColumns={getGridTemplateColumns(columns)}>
                        {getRow(row)}
                    </Row>
                );
            })}
        </>
    );
});

export default Body;
