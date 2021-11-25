import { useCallback, memo } from 'react';
import { RowHoverActionsWrapper } from './RowHoverActionsCell.styled';
import { RowHoverActionsCellProps } from './types';
import type { FC } from 'react';

export const RowHoverActionsCell: FC<RowHoverActionsCellProps> = memo(props => {
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return <RowHoverActionsWrapper onClick={stopPropagation} {...props} />;
});

RowHoverActionsCell.displayName = 'RowHoverActionsCell';
