import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import Text from '../../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

export const Chip: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { label, onClear, ...restProps } = props;

        const onClearHandler = useCallback(
            (e: React.MouseEvent<HTMLOrSVGElement>) => {
                e.stopPropagation();
                !restProps.disabled && onClear && onClear();
            },
            [restProps.disabled, onClear]
        );

        return (
            <Styled.Chip ref={ref} {...restProps}>
                <Text>
                    <strong>{label}</strong>
                </Text>
                {onClear && <ClearIcon size="S" onClick={onClearHandler} />}
            </Styled.Chip>
        );
    })
);

Chip.displayName = 'Chip';
Chip.Style = Styled.Chip;
