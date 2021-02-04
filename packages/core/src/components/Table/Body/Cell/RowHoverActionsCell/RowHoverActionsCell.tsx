import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import { ButtonSection, RowHoverActionsCellContainer } from './RowHoverActionsCell.styled';
import { RowHoverActionsCellProps } from './types';

export const RowHoverActionsCell: React.FC<RowHoverActionsCellProps> & WithStyle = React.memo(props => {
    const { rowHoverActions, isRowHovered } = props;
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <RowHoverActionsCellContainer isRowHovered={isRowHovered} onClick={stopPropagation}>
            <ButtonSection>{rowHoverActions}</ButtonSection>
        </RowHoverActionsCellContainer>
    );
});

RowHoverActionsCell.displayName = 'RowHoverActionsCell';
