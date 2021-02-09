import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import { RowHoverActions, RowHoverActionsWrapper } from './RowHoverActionsCell.styled';
import { RowHoverActionsCellProps } from './types';

export const RowHoverActionsCell: React.FC<RowHoverActionsCellProps> & WithStyle = React.memo(props => {
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <RowHoverActionsWrapper show={props.show} onClick={stopPropagation}>
            <RowHoverActions>{props.children}</RowHoverActions>
        </RowHoverActionsWrapper>
    );
});

RowHoverActionsCell.displayName = 'RowHoverActionsCell';
