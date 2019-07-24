import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props } from './types';

const getColor = ({ theme, color, disabled }: Props) => (disabled ? theme.button.disabled : theme.button[color]);

const outlined = () => css`
    border: 1px solid ${getColor};
    color: ${getColor};
`;

const solid = () => css`
    border: 1px solid ${getColor};
    background-color: ${getColor};
    color: ${({ theme }) => theme.colors.white};
`;

const flat = () => css`
    color: ${getColor};
`;

export const ButtonStyled = styled('button')<Props>`
    background-color: transparent;
    border: none;
    padding: 8px 10px;
    border-radius: 3px;
    user-select: none;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    ${props => props.variant === 'flat' && flat()};
    ${props => props.variant === 'outlined' && outlined()};
    ${props => props.variant === 'solid' && solid()};

    &:disabled {
        cursor: not-allowed;
    }
`;

ButtonStyled.defaultProps = {
    theme: defaultTheme,
    variant: 'solid',
    color: 'primary'
};
