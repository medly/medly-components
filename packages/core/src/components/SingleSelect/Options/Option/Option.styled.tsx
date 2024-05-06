import { SvgIcon } from '@medly-components/icons';
import styled, { css } from 'styled-components';
import Text from '../../../Text';
import { OptionStyledProps } from './types';

const maxWidthStyle = css<OptionStyledProps>`
        max-width: ${({ maxWidth }) => maxWidth};
        & > ${Text.Style} {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    `,
    minWidthStyle = css<OptionStyledProps>`
        min-width: fit-content;
    `;

export const OptionStyled = styled('li')<OptionStyledProps>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    box-sizing: border-box;
    min-height: ${({ variant, theme }) => theme.singleSelect.option.minHeight[variant]};
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${({ disabled, selected, hovered, hasError, theme }) =>
        theme.singleSelect.option.bgColor[!disabled && selected ? (hasError ? 'error' : 'selected') : hovered ? 'hovered' : 'default']};

    &:hover {
        background-color: ${({ disabled, selected, theme }) => !disabled && !selected && theme.singleSelect.option.bgColor.hovered};
        & > ${Text.Style} {
            color: ${({ theme }) => theme.singleSelect.option.textColor.hovered};
        }
    }

    &:active {
        background-color: ${({ disabled, selected, theme }) => !disabled && !selected && theme.singleSelect.option.bgColor.pressed};
    }

    & > ${Text.Style} {
        flex: 1;
        user-select: none;
        white-space: nowrap;
        color: ${({ disabled, selected, hasError, theme }) =>
            theme.singleSelect.option.textColor[disabled ? 'disabled' : selected ? (hasError ? 'error' : 'selected') : 'default']};
    }

    & > ${SvgIcon} {
        margin-left: 1.6rem;
        * {
            fill: ${({ disabled, selected, hasError, theme }) =>
                theme.singleSelect.option.textColor[disabled ? 'disabled' : selected ? (hasError ? 'error' : 'selected') : 'default']};
        }
    }

    ${({ maxWidth }) => (maxWidth ? maxWidthStyle : minWidthStyle)}
`;

export const CustomComponentWrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: start;
`;
