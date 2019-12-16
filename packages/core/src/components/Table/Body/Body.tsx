import React from 'react';
import Text from '../../Text';
import Cell from '../Cell';
import { GroupCell } from '../GroupCell';
import { getGridTemplateColumns } from '../helpers';
import Row, { NoResult } from '../Row';
import { ColumnConfig } from '../types';
import { Props } from './types';

const Body: React.SFC<Props> = React.memo(props => {
    const { data, columns, onRowClick, selectedRows, uniqueKeyName, rowDisableKey, onRowSelection, addColumnMaxSize, isLoading } = props;

    const handleRowClick = (rowData: any) => {
        return onRowClick && !rowData[rowDisableKey] ? () => onRowClick(rowData) : undefined;
    };

    const getRow = (rowData: any = {}, configs: ColumnConfig[] = columns, field = '') => {
        const cells: React.ReactElement[] = [];

        configs.forEach((config, index) => {
            if (!config) return null;

            const fieldName = `${field && `${field}.`}${config.field}`;

            return config.children
                ? cells.push(
                      <GroupCell key={index} hide={config.hide} gridTemplateColumns={getGridTemplateColumns(config.children)}>
                          {getRow(rowData[config.field], config.children, config.field)}
                      </GroupCell>
                  )
                : cells.push(
                      <Cell
                          isLoading={isLoading}
                          disabled={rowData[rowDisableKey]}
                          key={index}
                          data={rowData[config.field]}
                          rowId={rowData[uniqueKeyName]}
                          dottedFieldName={fieldName}
                          {...{ config, selectedRows, onRowSelection, addColumnMaxSize }}
                      />
                  );
        });

        return cells;
    };

    if (data.length === 0) {
        return (
            <NoResult>
                <Text textSize="M3">No result</Text>
            </NoResult>
        );
    }

    return (
        <>
            {data.map((row, index) => {
                return (
                    <Row
                        disabled={row[rowDisableKey]}
                        key={row.id || index}
                        onClick={handleRowClick(row)}
                        gridTemplateColumns={getGridTemplateColumns(columns)}
                    >
                        {getRow(row)}
                    </Row>
                );
            })}
        </>
    );
});

export default Body;
