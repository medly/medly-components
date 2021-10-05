import { BreakpointsTheme, CardTheme } from '@medly-components/theme';
import { css, styled, WithThemeProp } from '@medly-components/utils';
import { rgba } from 'polished';
import { CardProps } from './types';

const verticalFlow = ({ alignItems }: CardProps) => css`
        flex-direction: column;
        justify-content: ${alignItems === 'top' ? 'flex-start' : alignItems === 'bottom' ? 'flex-end' : 'center'};
        align-items: ${alignItems === 'left' ? 'flex-start' : alignItems === 'right' ? 'flex-end' : 'center'};
    `,
    horizontalFlow = ({ alignItems }: CardProps) => css`
        flex-direction: row;
        align-items: ${alignItems === 'top' ? 'flex-start' : alignItems === 'bottom' ? 'flex-end' : 'center'};
        justify-content: ${alignItems === 'left' ? 'flex-start' : alignItems === 'right' ? 'flex-end' : 'center'};
    `;

const borderTop = (separatorColor: string) => css`
        border-top: 1px solid ${separatorColor};
    `,
    borderLeft = (separatorColor: string) => css`
        border-left: 1px solid ${separatorColor};
    `,
    applyBorder = ({ flowDirection, separatorColor }: CardProps & CardTheme & WithThemeProp) => css`
        > div + div {
            ${flowDirection === 'vertical' ? borderTop(separatorColor!) : borderLeft(separatorColor!)}
        }
    `;

const solid = ({ backgroundColor, shadowColor, onClick }: CardTheme & CardProps & WithThemeProp) => css`
        background-color: ${backgroundColor};
        border-radius: ${({ theme }) => theme.card.borderRadius};
        box-shadow: 0 0.2rem 0.8rem ${rgba(shadowColor, 0.2)};
        &:hover {
            box-shadow: ${onClick && `0 0.4rem 0.8rem ${rgba(shadowColor, 0.6)}`};
        }
    `,
    flat = () => css`
        border-radius: 0;
        margin: 0;
        border: none;
        box-shadow: none;
        background-color: transparent;
    `;

const media = ({ theme, breakpoint }: CardProps & { breakpoint: keyof BreakpointsTheme } & WithThemeProp) => css`
        @media (min-width: ${theme.breakpoints[breakpoint].min}px) {
            padding: ${theme.card.padding[breakpoint]};
        }
    `,
    getPadding = ({ theme }: CardProps & WithThemeProp) => css`
        ${media({ theme, breakpoint: 'S' })}
        ${media({ theme, breakpoint: 'M' })}
        ${media({ theme, breakpoint: 'L' })}
        ${media({ theme, breakpoint: 'XL' })}
    `;

export const Card = styled('div').attrs(({ theme: { card } }) => ({ ...card }))<CardProps>`
    overflow: auto;
    box-sizing: border-box;
    flex: ${({ flex }) => flex};
    display: ${({ display, fullWidth }) => (fullWidth ? display : `inline-${display}`)};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    height: ${({ fullHeight }) => fullHeight && '100%'};
    min-width: ${({ minWidth }) => minWidth};
    min-height: ${({ minHeight }) => minHeight};
    transition: all 100ms ease-out;

    &, & * {
            cursor:  ${props => props.onClick && 'pointer'};     
    }

    ${props => (props.variant === 'solid' ? solid : flat)};
    ${props => props.separator && applyBorder}
    ${({ flowDirection }) => flowDirection === 'vertical' && verticalFlow}
    ${({ flowDirection }) => flowDirection === 'horizontal' && horizontalFlow}
    ${({ withoutPadding }) => !withoutPadding && getPadding}
`;
