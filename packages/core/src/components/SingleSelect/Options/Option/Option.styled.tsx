import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../../../Text';
import { OptionStyledProps } from './types';

export const OptionStyled = styled('li').attrs(({ theme: { singleSelect } }) => ({ ...singleSelect.option }))<OptionStyledProps>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    box-sizing: border-box;
    min-height: ${({ variant, minHeight }) => minHeight[variant]};
    min-width: fit-content;
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${({ disabled, selected, hovered, hasError, bgColor }) =>
        bgColor[!disabled && selected ? (hasError ? 'error' : 'selected') : hovered ? 'hovered' : 'default']};

    &:hover {
        background-color: ${({ disabled, selected, bgColor }) => !disabled && !selected && bgColor.hovered};
    }

    &:active {
        background-color: ${({ disabled, selected, bgColor }) => !disabled && !selected && bgColor.pressed};
    }

    & > ${Text.Style} {
        flex: 1;
        user-select: none;
        white-space: nowrap;
        color: ${({ disabled, selected, hasError, textColor }) =>
            textColor[disabled ? 'disabled' : selected ? (hasError ? 'error' : 'selected') : 'default']};
    }

    & > ${SvgIcon} {
        margin-left: 1.6rem;
        * {
            fill: ${({ disabled, selected, hasError, textColor }) =>
                textColor[disabled ? 'disabled' : selected ? (hasError ? 'error' : 'selected') : 'default']};
        }
    }
`;
