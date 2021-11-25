import { ChevronDownIcon } from '@medly-components/icons';
import { memo } from 'react';
import Chip from './Chip';
import { InputSuffixStyled } from './InputSuffix.styled';
import { InputSuffixProps } from './types';
import type { FC } from 'react';

export const InputSuffix: FC<InputSuffixProps> = memo(props => {
    const { id, size, disabled, isActive, hasError, optionsCount, ...restProps } = props,
        state = disabled ? 'disabled' : hasError ? 'error' : isActive ? 'active' : 'default';

    return (
        <InputSuffixStyled id={id} size={size}>
            {optionsCount > 0 && (
                <Chip id={`${id}-chip`} label={optionsCount} state={state} size={size} disabled={disabled} {...restProps} />
            )}
            <ChevronDownIcon size={size} />
        </InputSuffixStyled>
    );
});
InputSuffix.displayName = 'InputSuffix';
