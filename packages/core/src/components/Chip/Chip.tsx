import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import { useCallback, forwardRef, memo } from 'react';
import Text from '../Text';
import * as Styled from './Chip.styled';
import { ChipProps } from './types';
import type { FC, MouseEvent } from 'react';

const Component: FC<ChipProps> = memo(
    forwardRef((props, ref) => {
        const { label, onDelete, ...restProps } = props;

        const handleDelete = useCallback(
            (e: MouseEvent<SVGElement>) => {
                e.stopPropagation();
                !restProps.disabled && onDelete && onDelete();
            },
            [restProps.disabled, onDelete]
        );

        return (
            <Styled.Chip ref={ref} {...restProps}>
                <Text>{label}</Text>
                {onDelete && <ClearIcon size="S" onClick={handleDelete} title={`${label} chip clear icon`} />}
            </Styled.Chip>
        );
    })
);

Component.defaultProps = {
    variant: 'solid'
};
Component.displayName = 'Chip';
export const Chip: FC<ChipProps> & WithStyle = Object.assign(Component, { Style: Styled.Chip });
