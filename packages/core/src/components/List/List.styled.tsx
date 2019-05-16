/* stylelint-disable  no-descending-specificity*/
import { defaultTheme, SpacingTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props } from './types';

const horizontal = (spacings: SpacingTheme) => css`
    li {
        margin: 0px ${spacings.XS};
        &:last-child {
            margin-right: ${spacings.S};
        }
        &:first-child {
            margin-left: ${spacings.S};
        }
    }
`;

const vertical = (spacings: SpacingTheme) => css`
    li {
        margin: ${spacings.XS} 0px;
        &:last-child {
            margin-bottom: ${spacings.S};
        }
        &:first-child {
            margin-top: ${spacings.S};
        }
    }
`;

export const ListStyled = styled('ul').attrs(({ theme: { spacing: spacings } }) => ({ spacings }))<Props>`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    flex-direction: ${({ variant }) => (variant === 'horizontal' ? 'row' : 'column')};

    ${({ spacings, variant }) => variant === 'horizontal' && horizontal(spacings)};
    ${({ spacings, variant }) => variant === 'vertical' && vertical(spacings)};
`;

ListStyled.defaultProps = {
    theme: defaultTheme
};
