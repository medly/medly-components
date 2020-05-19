import { CardTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { Props } from './types';

const verticalFlow = ({ alignItems }: Props) => css`
    flex-direction: column;
    justify-content: ${alignItems === 'top' ? 'flex-start' : alignItems === 'bottom' ? 'flex-end' : 'center'};
    align-items: ${alignItems === 'left' ? 'flex-start' : alignItems === 'right' ? 'flex-end' : 'center'};
`;

const horizontalFlow = ({ alignItems }: Props) => css`
    flex-direction: row;
    align-items: ${alignItems === 'top' ? 'flex-start' : alignItems === 'bottom' ? 'flex-end' : 'center'};
    justify-content: ${alignItems === 'left' ? 'flex-start' : alignItems === 'right' ? 'flex-end' : 'center'};
`;

const borderTop = (separatorColor: string) => css`
    border-top: 1px solid ${separatorColor};
`;

const borderLeft = (separatorColor: string) => css`
    border-left: 1px solid ${separatorColor};
`;

const applyBorder = ({ flowDirection, separatorColor }: Partial<Props & CardTheme>) => css`
    > div + div {
        ${flowDirection === 'vertical' ? borderTop(separatorColor) : borderLeft(separatorColor)}
    }
`;

const solid = ({ backgroundColor, shadowColor }: Partial<CardTheme>) => css`
    border-radius: 0.8rem;
    background-color: ${backgroundColor};
    box-shadow: 0 0.2rem 0.8rem ${rgba(shadowColor, 0.2)};
    &:hover {
        box-shadow: 0 0.4rem 0.8rem ${rgba(shadowColor, 0.6)};
    }
`;

const flat = () => css`
    border-radius: 0;
    margin: 0;
    border: none;
    box-shadow: none;
    background-color: transparent;
`;

export const Card = styled('div').attrs(({ theme: { card } }) => ({ ...card }))<Props>`
    overflow: auto;
    box-sizing: border-box;
    flex: ${({ flex }) => flex};
    display: ${({ display, fullWidth }) => (fullWidth ? display : `inline-${display}`)};
    padding: ${({ withoutPadding }) => !withoutPadding && '2.4rem'};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    height: ${({ fullHeight }) => fullHeight && '100%'};
    min-width: ${({ minWidth }) => minWidth};
    min-height: ${({ minHeight }) => minHeight};
    transition: all 100ms ease-out;

    & {
        * {
            cursor:  ${props => props.onClick && 'pointer'};     
        }
    }

    ${props => (props.variant === 'solid' ? solid : flat)};
    ${props => props.separator && applyBorder}
    ${({ flowDirection }) => flowDirection === 'vertical' && verticalFlow}
    ${({ flowDirection }) => flowDirection === 'horizontal' && horizontalFlow}
`;
