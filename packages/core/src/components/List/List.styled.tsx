/* stylelint-disable  no-descending-specificity */
import { defaultTheme, SpacingTheme } from '@medly-components/theme';
import styled, { css } from 'styled-components';
import { ListProps } from './types';

const horizontal = (spacing: SpacingTheme) => css`
    li {
        margin: 0 ${spacing.S1};
        &:last-child {
            margin-right: ${spacing.S2};
        }
        &:first-child {
            margin-left: ${spacing.S2};
        }
    }
`;

const vertical = (spacing: SpacingTheme) => css`
    li {
        margin: ${spacing.S1} 0;
        &:last-child {
            margin-bottom: ${spacing.S2};
        }
        &:first-child {
            margin-top: ${spacing.S2};
        }
    }
`;

export const ListStyled = styled('ul')<ListProps>`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    flex-direction: ${({ variant }) => (variant === 'horizontal' ? 'row' : 'column')};
    ${({ theme, variant }) => variant === 'horizontal' && horizontal(theme.spacing)};
    ${({ theme, variant }) => variant === 'vertical' && vertical(theme.spacing)};
`;

ListStyled.defaultProps = {
    theme: defaultTheme
};
