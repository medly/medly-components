import { defaultTheme, Theme } from '@medly-components/theme';
import { css, styled } from '../../utils/styled';
import { Props } from './types';

const outlined = (theme: Theme, color: Props['color']) => css`
    border: 1px solid ${theme.button[color]};
    color: ${theme.button[color]};
`;

const solid = (theme: Theme, color: Props['color']) => css`
    background-color: ${theme.button[color]};
    color: ${theme.colors.white};
`;

const flat = (theme: Theme, color: Props['color']) => css`
    color: ${theme.button[color]};
`;

export const ButtonStyled = styled('button')<Props>`
    background-color: transparent;
    border: none;
    padding: 10px;
    margin: ${({ theme }) => theme.spacing.S};
    border-radius: 3px;
    user-select: none;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    ${props => props.variant === 'flat' && flat(props.theme, props.color)};
    ${props => props.variant === 'outlined' && outlined(props.theme, props.color)};
    ${props => props.variant === 'solid' && solid(props.theme, props.color)};
`;

ButtonStyled.defaultProps = {
    theme: defaultTheme,
    variant: 'solid',
    color: 'primary'
};
