import { ExpandMoreIcon } from '@medly-components/icons';
import React, { useCallback, useContext, useState } from 'react';
import Checkbox from '../../../Checkbox';
import { GroupCell } from '../../GroupCell';
import { getGridTemplateColumns } from '../../helpers';
import { TablePropsContext } from '../../TableProps.context';
import { TableColumnConfig } from '../../types';
import Cell from '../Cell';
import { ExtendedRowCell, LoadingDiv, RowActionsCell } from '../Cell/Styled';
import * as Styled from './Row.styled';
import { Props } from './types';

export const Row: React.FC<Props> = React.memo(props => {
    const [isExpanded, setExpansionState] = useState(false),
        { id, data, showShadowAfterFrozenElement, selectedRowIds, onRowSelection, addColumnMaxSize, ...restProps } = props,
        {
            columns,
            isLoading,
            onRowClick,
            rowClickDisableKey,
            rowSelectionDisableKey,
            isSelectable,
            isExpandable,
            size: tableSize,
            expandedRowComponent: ExpandedRowComponent
        } = useContext(TablePropsContext);

    const isRowSelected = !isLoading && selectedRowIds.includes(id),
        handleRowSelection = useCallback(() => onRowSelection(id), [id]),
        stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleExpansionIconClick = useCallback(() => setExpansionState(val => !val), []),
        handleRowClick =
            !isLoading && onRowClick && !data[rowClickDisableKey]
                ? () => onRowClick(data)
                : isExpandable
                ? handleExpansionIconClick
                : undefined;

    const getCells = (rowData: any = {}, configs: TableColumnConfig[] = columns, field = '') =>
        configs.reduce((cells, config) => {
            const fieldName = `${field && `${field}.`}${config.field}`;

            return config.field === 'row-actions'
                ? cells
                : [
                      ...cells,
                      config.children ? (
                          <GroupCell
                              as={field ? 'div' : 'td'}
                              key={config.field}
                              hidden={config.hidden}
                              gridTemplateColumns={getGridTemplateColumns(config.children)}
                          >
                              {getCells(rowData[config.field], config.children, config.field)}
                          </GroupCell>
                      ) : (
                          <Cell
                              rowId={id}
                              key={fieldName}
                              config={config}
                              as={field ? 'div' : 'td'}
                              isLoading={isLoading}
                              data={rowData[config.field]}
                              addColumnMaxSize={addColumnMaxSize}
                              isRowClickDisabled={rowData[rowClickDisableKey]}
                              dottedFieldName={fieldName}
                              tableSize={tableSize}
                          />
                      )
                  ];
        }, []);

    return (
        <>
            <Styled.Row
                {...restProps}
                disabled={data[rowClickDisableKey]}
                onClick={handleRowClick}
                isSelected={isRowSelected}
                gridTemplateColumns={getGridTemplateColumns(columns)}
            >
                {(isSelectable || isExpandable) && (
                    <RowActionsCell
                        onClick={stopPropagation}
                        isExpanded={isExpanded}
                        isExpandable={isExpandable}
                        isRowSelected={isRowSelected}
                        isSelectable={isSelectable}
                        tableSize={tableSize}
                        showSelectedRowBorder={isRowSelected}
                        showShadowAtRight={showShadowAfterFrozenElement}
                    >
                        {isLoading ? (
                            <LoadingDiv />
                        ) : (
                            <>
                                {isExpandable && <ExpandMoreIcon size="L" onClick={handleExpansionIconClick} />}
                                {isSelectable && (
                                    <Checkbox
                                        disabled={data[rowSelectionDisableKey]}
                                        checked={isRowSelected}
                                        onChange={handleRowSelection}
                                        onClick={stopPropagation}
                                    />
                                )}
                            </>
                        )}
                    </RowActionsCell>
                )}
                {getCells(data)}
                {isExpanded && (
                    <>
                        <RowActionsCell
                            onClick={stopPropagation}
                            showSelectedRowBorder={isRowSelected}
                            showShadowAtRight={showShadowAfterFrozenElement}
                        />
                        <ExtendedRowCell onClick={stopPropagation} tableSize={tableSize}>
                            <ExpandedRowComponent rowId={id} rowData={data} disabled={data[rowClickDisableKey]} />
                        </ExtendedRowCell>
                    </>
                )}
            </Styled.Row>
        </>
    );
});
Row.displayName = 'Row';
