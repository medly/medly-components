import { ChevronDownIcon } from '@medly-components/icons';
import React, { FC } from 'react';
import Chip from '../Chip';
import { InputSuffixStyled } from './InputSuffix.styled';
import { InputSuffixProps } from './types';

export const InputSuffix: FC<InputSuffixProps> = React.memo(props => {
    const { id, variant, disabled, isActive, hasError, onClear, optionsCount } = props;
    const state = disabled ? 'disabled' : hasError ? 'error' : isActive ? 'active' : 'default';

    return (
        <InputSuffixStyled id={id}>
            {optionsCount > 0 && <Chip testId="cancel-chip" label={optionsCount} state={state} variant={variant} onClear={onClear} />}
            <ChevronDownIcon />
        </InputSuffixStyled>
    );
});
InputSuffix.displayName = 'InputSuffix';
