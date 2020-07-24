import { WithStyle } from '@medly-components/utils/src';
import React, { useCallback } from 'react';
import { RowActionsCellStyled } from '../RowActionsCell/RowActionsCell.styled';
import { ExtendedRowCellStyled } from './ExtendedRowCell.styled';
import { ExtendedRowCellProps } from './types';

export const ExtendedRowCell: React.FC<ExtendedRowCellProps> & WithStyle = React.memo(props => {
    const {
        rowId,
        rowData,
        tableSize,
        isRowSelected,
        isRowClickDisabled,
        showShadowAtRight,
        expandedRowComponent: ExpandedRowComponent
    } = props;
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <>
            <RowActionsCellStyled onClick={stopPropagation} isRowSelected={isRowSelected} showShadowAtRight={showShadowAtRight} />
            <ExtendedRowCellStyled onClick={stopPropagation} tableSize={tableSize}>
                <ExpandedRowComponent rowId={rowId} rowData={rowData} disabled={isRowClickDisabled} />
            </ExtendedRowCellStyled>
        </>
    );
});
ExtendedRowCell.displayName = 'ExtendedRowCell';
ExtendedRowCell.Style = ExtendedRowCellStyled;
