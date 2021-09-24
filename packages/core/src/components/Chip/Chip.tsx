import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback } from 'react';
import Text from '../Text';
import * as Styled from './Chip.styled';
import { ChipProps } from './types';

const Component: FC<ChipProps> = React.memo(
    React.forwardRef((props, ref) => {
        const { label, onDelete, ...restProps } = props;

        const handleDelete = useCallback(
            (e: React.MouseEvent<HTMLOrSVGElement>) => {
                e.stopPropagation();
                !restProps.disabled && onDelete && onDelete();
            },
            [restProps.disabled, onDelete]
        );

        return (
            <Styled.Chip ref={ref} {...restProps}>
                <Text>{label}</Text>
                {onDelete && <ClearIcon size="S" onClick={handleDelete} />}
            </Styled.Chip>
        );
    })
);

Component.defaultProps = {
    variant: 'solid'
};
Component.displayName = 'Chip';
export const Chip: FC<ChipProps> & WithStyle = Object.assign(Component, { Style: Styled.Chip });
