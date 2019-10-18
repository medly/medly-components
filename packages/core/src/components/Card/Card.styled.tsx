import { CardTheme } from '@medly-components/theme';
import { css, fullHeight, fullWidth, styled } from '@medly-components/utils';
import { SFC } from 'react';
import { ItemsPosition, Props } from './types';

const verticalFlow = (alignItems: ItemsPosition) => css`
    flex-direction: column;
    justify-content: ${alignItems === 'top' ? 'flex-start' : alignItems === 'bottom' ? 'flex-end' : 'center'};
    align-items: ${alignItems === 'left' ? 'flex-start' : alignItems === 'right' ? 'flex-end' : 'center'};
`;

const horizontalFlow = (alignItems: ItemsPosition) => css`
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

const applyBorder = ({ separator, flowDirection, separatorColor }: Partial<Props & CardTheme>) =>
    separator &&
    css`
        > div + div {
            ${flowDirection === 'vertical' ? borderTop(separatorColor) : borderLeft(separatorColor)}
        }
    `;

const solid = ({ solidBgColor, solidTextColor }: Partial<CardTheme>) => css`
    border-color: ${solidBgColor};
    background-color: ${solidBgColor};
    && {
        * {
            color: ${solidTextColor};
            background-color: ${solidBgColor};
        }
    }
`;

const outlined = ({ borderColor, shadowColor }: Partial<CardTheme>) => css`
    border-radius: 4px;
    border: 1px solid ${borderColor};
    box-shadow: 0 2px 4px 0 ${shadowColor};
`;

const flat = () => css`
    border-radius: 0px;
    margin: 0px;
    border: none;
    box-shadow: none;
    background-color: transparent;
    && {
        * {
            background-color: transparent;
        }
    }
`;

const clickable = (props: Partial<CardTheme>) => css`
    cursor: pointer;

    :hover {
        ${solid(props)}
    }

    :active {
        box-shadow: none;
    }
`;

export const Card: SFC<Props> = styled('div').attrs(({ theme: { card } }) => ({ ...card }))<Props>`
    display: inline-flex;
    align-self: stretch;
    margin: 5px;
    overflow: auto;
    flex: ${({ flex }) => flex};
    box-sizing: border-box;
    background-color: ${({ bgColor }) => bgColor};
    padding: ${({ withPadding }) => withPadding && '10px'};

    ${({ alignItems, flowDirection }) => (flowDirection === 'vertical' ? verticalFlow(alignItems) : horizontalFlow(alignItems))}

    ${outlined};
    ${({ variant }) => variant === 'flat' && flat()};
    ${props => props.variant === 'solid' && solid(props)};

    ${props => props.fullWidth && fullWidth('10px')};
    ${props => props.fullHeight && fullHeight('10px')};

    ${props => applyBorder(props)}

    ${props => props.clickable && clickable(props)}
`;

Card.defaultProps = {
    variant: 'outlined',
    flowDirection: 'vertical',
    separator: false,
    flex: 1,
    withPadding: true,
    alignItems: 'center',
    clickable: false,
    fullWidth: false,
    fullHeight: false
};
