import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import Text from '../../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

export const Chip: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, label, onClear, ...restProps } = props,
            chipId = id ? id.replace(' ', '') : 'medly-options-chip';

        const onClearHandler = useCallback(
            (e: React.MouseEvent<HTMLOrSVGElement>) => {
                e.stopPropagation();
                !restProps.disabled && onClear && onClear(label);
            },
            [restProps.disabled, onClear]
        );

        return (
            <Styled.Chip ref={ref} id={chipId} {...restProps}>
                <Text textWeight="Medium" textVariant={restProps.size === 'S' ? 'body2' : 'body1'}>
                    {label}
                </Text>
                <ClearIcon id={`${chipId}-clear`} size="S" onClick={onClearHandler} />
            </Styled.Chip>
        );
    })
);

Chip.displayName = 'Chip';
Chip.Style = Styled.Chip;
Chip.defaultProps = {
    state: 'default',
    variant: 'outlined'
};
