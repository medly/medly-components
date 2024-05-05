import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import type { FCC, MouseEvent } from 'react';
import { forwardRef, memo, useCallback } from 'react';
import Text from '../Text';
import * as Styled from './Chip.styled';
import { ChipProps } from './types';

const Component: FCC<ChipProps> = memo(
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
export const Chip: FCC<ChipProps> & WithStyle = Object.assign(Component, { Style: Styled.Chip });
