import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback } from 'react';
import Text from '../../../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

const Component: FC<Props> = React.memo(({ id, label, onClear, ...restProps }) => {
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

Component.displayName = 'Chip';
Component.defaultProps = { state: 'default', variant: 'outlined' };
export const Chip: FC<Props> & WithStyle = Object.assign(Component, { Style: Styled.Chip });
