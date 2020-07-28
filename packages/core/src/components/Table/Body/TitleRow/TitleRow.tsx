import React, { useCallback, useContext, useMemo, useState } from 'react';
import { getGridTemplateColumns } from '../../helpers';
import { TablePropsContext } from '../../TableProps.context';
import { ExtendedRowCellStyled } from '../Cell/ExtendedRowCell/ExtendedRowCell.styled';
import RowActionsCell from '../Cell/RowActionsCell';
import Row from '../Row';
import * as Styled from './TitleRow.styled';
import { Props } from './types';

export const TitleRow: React.FC<Props> = React.memo(props => {
    const [isExpanded, setExpansionState] = useState(false),
        { id, data, showShadowAfterFrozenElement, addColumnMaxSize, selectedRowIds, onRowSelection, ...restProps } = props,
        tableProps = useContext(TablePropsContext),
        {
            columns,
            rowIdentifier,
            groupBy,
            isLoading,
            rowSelectionDisableKey,
            isRowSelectable,
            isRowExpandable,
            showRowWithCardStyle,
            size: tableSize
        } = tableProps;

    const isRowSelected = useMemo(() => !isLoading && selectedRowIds.includes(id), [id, isLoading, selectedRowIds]),
        stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        isRowSelectionDisabled = useMemo(() => data[rowSelectionDisableKey], [data, rowSelectionDisableKey]),
        handleRowSelection = useCallback(() => onRowSelection(id), [id]),
        handleExpansionIconClick = useCallback(() => setExpansionState(val => !val), []);

    return (
        <>
            <Styled.Row
                {...restProps}
                onClick={handleExpansionIconClick}
                isSelected={isRowSelected}
                isExpanded={isExpanded}
                isExpandable
                showRowWithCardStyle={showRowWithCardStyle}
                gridTemplateColumns={getGridTemplateColumns(columns)}
            >
                <RowActionsCell
                    isRowExpandable
                    tableSize={tableSize}
                    isLoading={isLoading}
                    isRowExpanded={isExpanded}
                    onRowExpansionIconClick={handleExpansionIconClick}
                />
                {(isRowSelectable || isRowExpandable) && (
                    <RowActionsCell isRowSelectable={isRowSelectable} tableSize={tableSize} isLoading={isLoading} />
                )}
                <Styled.TitleCell tableSize={tableSize}>{`${data[groupBy]} ${data.count}`}</Styled.TitleCell>
                <Styled.BlankCell onClick={stopPropagation} />
                <ExtendedRowCellStyled onClick={stopPropagation} tableSize={tableSize} isRowExpanded={isExpanded}>
                    <TablePropsContext.Provider value={{ ...tableProps, columns: columns.slice(1) }}>
                        {data.children.map((row: { [k: string]: any }, index: number) => (
                            <Row key={row[rowIdentifier] || index} {...{ ...props, id: row[rowIdentifier] || index, data: row }} />
                        ))}
                    </TablePropsContext.Provider>
                </ExtendedRowCellStyled>
            </Styled.Row>
        </>
    );
});
TitleRow.displayName = 'TitleRow';
