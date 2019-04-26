import { css, styled } from '@core-styled';
import { ButtonTheme, defaultTheme } from '@medly-components/theme';
import { Props } from './types';

const outlined = (theme: ButtonTheme) => css`
    border: 1px solid ${theme.outlined.borderColor};
    color: ${theme.outlined.textColor};
`;

const solid = (theme: ButtonTheme) => css`
    background-color: ${theme.solid.bgColor};
    color: ${theme.solid.textColor};
`;

const flat = (theme: ButtonTheme) => css`
    color: ${theme.flat.textColor};
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

    ${props => props.flat && flat(props.theme.button)};
    ${props => props.outlined && outlined(props.theme.button)};
    ${props => props.solid && solid(props.theme.button)};
`;

ButtonStyled.defaultProps = {
    theme: defaultTheme
};
