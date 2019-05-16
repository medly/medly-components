import { defaultTheme } from '@medly-components/theme';
import { styled, WithThemeProp } from '@medly-components/utils';

export const LinkStyled = styled('a')<WithThemeProp>`
    color: ${({ theme: { link } }) => link.color};
    background-color: transparent;
    text-decoration: none;

    &:active {
        color: ${({ theme: { link } }) => link.activeColor};
    }

    &:hover {
        color: ${({ theme: { link } }) => link.hoverColor};
        text-decoration: underline;
        outline-width: 0;
        cursor: pointer;
    }
`;

LinkStyled.defaultProps = {
    theme: defaultTheme
};
