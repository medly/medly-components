import type { FCC } from 'react';
import { memo, useCallback } from 'react';
import { RowHoverActionsWrapper } from './RowHoverActionsCell.styled';
import { RowHoverActionsCellProps } from './types';

export const RowHoverActionsCell: FCC<RowHoverActionsCellProps> = memo(props => {
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return <RowHoverActionsWrapper onClick={stopPropagation} {...props} />;
});

RowHoverActionsCell.displayName = 'RowHoverActionsCell';
