import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useCallback } from 'react';
import Text from '../../../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

const Component: FCC<Props> = memo(({ id, value, label, disabled, onClear }) => {
    const chipId = id ? id.replace(' ', '') : 'medly-options-chip',
        onClearHandler = useCallback(() => !disabled && onClear && onClear(value), [disabled, onClear, value]);

    return (
        <Styled.Chip id={chipId} disabled={disabled}>
            <Text textVariant="button2">{label}</Text>
            <ClearIcon id={`${chipId}-clear`} title={`${chipId}-clear-icon`} onClick={onClearHandler} />
        </Styled.Chip>
    );
});

Component.displayName = 'Chip';
export const Chip: FCC<Props> & WithStyle = Object.assign(Component, { Style: Styled.Chip });
