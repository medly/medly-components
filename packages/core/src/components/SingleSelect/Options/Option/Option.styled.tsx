import { styled } from '@medly-components/utils';
import { OptionStyledProps } from './types';

export const OptionStyled = styled('li').attrs(({ theme: { select } }) => ({ ...select }))<OptionStyledProps>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 5px;
    color: ${({ selected, selectedTextColor }) => (selected ? selectedTextColor : 'inherit')};
    background-color: ${({ selected, disabled, selectedBgColor, disabledBgcolor, bgColor }) =>
        selected ? selectedBgColor : disabled ? disabledBgcolor : bgColor};

    :last-child {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    :first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
`;
