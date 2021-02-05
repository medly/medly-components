import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import { RowHoverActions, RowHoverActionsWrapper } from './RowHoverActionsCell.styled';
import { RowHoverActionsCellProps } from './types';

export const RowHoverActionsCell: React.FC<RowHoverActionsCellProps> & WithStyle = React.memo(props => {
    const { rowHoverActions, isRowHovered, data, id } = props;
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <RowHoverActionsWrapper isRowHovered={isRowHovered} onClick={stopPropagation}>
            <RowHoverActions>{rowHoverActions({ rowData: data, rowId: id })}</RowHoverActions>
        </RowHoverActionsWrapper>
    );
});

RowHoverActionsCell.displayName = 'RowHoverActionsCell';
