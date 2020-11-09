import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import { RowActionsCellStyled } from '../RowActionsCell/RowActionsCell.styled';
import { ExtendedRowCellStyled, Wrapper } from './ExtendedRowCell.styled';
import { ExtendedRowCellProps } from './types';

export const ExtendedRowCell: React.FC<ExtendedRowCellProps> & WithStyle = React.memo(props => {
    const {
        rowId,
        rowData,
        tableSize,
        isRowSelected,
        isRowExpanded,
        isGroupedTable,
        isRowClickDisabled,
        showShadowAtRight,
        expandedRowComponent: ExpandedRowComponent
    } = props;
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <>
            <RowActionsCellStyled
                onClick={stopPropagation}
                isRowSelected={isRowSelected}
                isGroupedTable={isGroupedTable}
                showShadowAtRight={showShadowAtRight}
            />

            <ExtendedRowCellStyled onClick={stopPropagation} tableSize={tableSize} isRowExpanded={isRowExpanded}>
                {isRowExpanded ? (
                    <Wrapper tableSize={tableSize}>
                        <ExpandedRowComponent rowId={rowId} rowData={rowData} disabled={isRowClickDisabled} />
                    </Wrapper>
                ) : null}
            </ExtendedRowCellStyled>
        </>
    );
});
ExtendedRowCell.displayName = 'ExtendedRowCell';
ExtendedRowCell.Style = ExtendedRowCellStyled;
