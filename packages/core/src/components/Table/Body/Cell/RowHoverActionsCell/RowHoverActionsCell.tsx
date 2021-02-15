import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import { RowHoverActionsWrapper } from './RowHoverActionsCell.styled';
import { RowHoverActionsCellProps } from './types';

export const RowHoverActionsCell: React.FC<RowHoverActionsCellProps> & WithStyle = React.memo(props => {
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return <RowHoverActionsWrapper onClick={stopPropagation} {...props} />;
});

RowHoverActionsCell.displayName = 'RowHoverActionsCell';
