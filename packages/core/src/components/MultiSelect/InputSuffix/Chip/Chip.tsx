import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback } from 'react';
import Text from '../../../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

export const Chip: FC<Props> & WithStyle = React.memo(({ id, label, onClear, ...restProps }) => {
    const onClickHandler = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        onClearHandler = useCallback(
            (e: React.MouseEvent<HTMLOrSVGElement>) => {
                e.stopPropagation();
                !restProps.disabled && onClear && onClear(label);
            },
            [restProps.disabled, onClear]
        );

    return (
        <Styled.Chip id={id} {...restProps} onClick={onClickHandler}>
            <Text textWeight="Medium" textVariant={restProps.size === 'S' ? 'body2' : 'body1'}>
                {label}
            </Text>
            {!restProps.hideClearIcon && <ClearIcon id={`${id}-clear`} onClick={onClearHandler} />}
        </Styled.Chip>
    );
});

Chip.displayName = 'Chip';
Chip.Style = Styled.Chip;
Chip.defaultProps = {
    state: 'default',
    variant: 'outlined'
};
