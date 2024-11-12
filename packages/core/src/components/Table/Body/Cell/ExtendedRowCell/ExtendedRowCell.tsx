import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { RowActionsCellStyled } from '../RowActionsCell/RowActionsCell.styled';
import { ExtendedRowCellStyled, Wrapper } from './ExtendedRowCell.styled';
import { ExtendedRowCellProps } from './types';

const Component: FC<ExtendedRowCellProps> = memo(props => {
    const {
        rowId,
        rowData,
        tableSize,
        isRowSelected,
        isRowExpanded,
        isGroupedTable,
        isRowClickDisabled,
        showShadowAtRight,
        hideRowActionsCell,
        expandedRowComponent: ExpandedRowComponent
    } = props;
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <>
            {!hideRowActionsCell && (
                <RowActionsCellStyled
                    onClick={stopPropagation}
                    isRowSelected={isRowSelected}
                    isGroupedTable={isGroupedTable}
                    showShadowAtRight={showShadowAtRight}
                />
            )}
            <ExtendedRowCellStyled
                onClick={stopPropagation}
                tableSize={tableSize}
                isRowExpanded={isRowExpanded}
                hideRowActionsCell={hideRowActionsCell}
            >
                {isRowExpanded && ExpandedRowComponent ? (
                    <Wrapper tableSize={tableSize}>
                        <ExpandedRowComponent rowId={rowId} rowData={rowData} disabled={isRowClickDisabled} />
                    </Wrapper>
                ) : null}
            </ExtendedRowCellStyled>
        </>
    );
});
Component.displayName = 'ExtendedRowCell';
export const ExtendedRowCell: FC<ExtendedRowCellProps> & WithStyle = Object.assign(Component, { Style: ExtendedRowCellStyled });
