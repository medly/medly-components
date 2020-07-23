import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import Text from '../../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

export const Chip: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { label, onClear, testId, ...restProps } = props;

        const onClearHandler = useCallback(
            (e: React.MouseEvent<HTMLOrSVGElement>) => {
                e.stopPropagation();
                !restProps.disabled && onClear && onClear(label);
            },
            [restProps.disabled, onClear]
        );

        return (
            <Styled.Chip ref={ref} {...restProps}>
                <Text>{label}</Text>
                <ClearIcon size="S" data-testid={testId} onClick={onClearHandler} />
            </Styled.Chip>
        );
    })
);

Chip.displayName = 'Chip';
Chip.Style = Styled.Chip;
Chip.defaultProps = {
    variant: 'outlined',
    state: 'default',
    testId: 'selected-chip'
};
