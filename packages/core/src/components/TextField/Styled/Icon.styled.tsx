import { InjectClassName, WithThemeProp } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import { TextFieldProps } from '../types';

type IconProps = Pick<Required<TextFieldProps>, 'size' | 'variant'> & {
    disabled?: boolean;
    isActive?: boolean;
    isErrorPresent?: boolean;
};

const getStyleForIcon = ({ theme, variant, disabled }: IconProps & WithThemeProp, state: 'default' | 'active' | 'error' | 'disabled') => {
    const variantTheme = theme.textField[variant];
    return css`
        * {
            fill: ${variantTheme[state].iconColor};
        }
        &:hover {
            * {
                fill: ${!disabled && variantTheme.hover.iconColor};
            }
        }
    `;
};

const disableCursor = css`
    &&& {
        cursor: not-allowed;
    }
`;

export const IconWrapper = styled(InjectClassName)<IconProps>`
    pointer-events: none;
    ${props => getStyleForIcon(props, 'default')};
    ${props => props.isActive && getStyleForIcon(props, 'active')};
    ${props => props.isErrorPresent && getStyleForIcon(props, 'error')};
    ${props => props.disabled && getStyleForIcon(props, 'disabled')};
    ${props => props.disabled && disableCursor};
`;

export const Prefix = styled(IconWrapper)<IconProps>`
    margin-right: ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
`;

export const Suffix = styled(IconWrapper)<IconProps>`
    margin-left: ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
`;
