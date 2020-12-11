import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback } from 'react';
import Text from '../../../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

export const Chip: FC<Props> & WithStyle = React.memo(({ id, value, label, disabled, onClear }) => {
    const chipId = id ? id.replace(' ', '') : 'medly-options-chip',
        onClearHandler = useCallback(() => !disabled && onClear && onClear(value), [disabled, onClear]);

    return (
        <Styled.Chip id={chipId} disabled={disabled}>
            <Text textVariant="button2">{label}</Text>
            <ClearIcon id={`${chipId}-clear`} onClick={onClearHandler} />
        </Styled.Chip>
    );
});

Chip.displayName = 'Chip';
Chip.Style = Styled.Chip;
