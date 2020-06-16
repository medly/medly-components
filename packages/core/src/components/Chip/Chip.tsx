import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback } from 'react';
import Text from '../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

export const Chip: FC<Props> & WithStyle = React.memo(
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

Chip.defaultProps = {
    variant: 'solid'
};
Chip.displayName = 'Chip';
Chip.Style = Styled.Chip;
