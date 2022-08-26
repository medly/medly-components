import { ArrowLeftIcon, ArrowRightIcon } from '@medly-components/icons';
import { BreakpointsTheme } from '@medly-components/theme';
import { breakpoints, media } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import { CarouselStyledProps, StyledNextPrevBtnProps } from './types';

const commonStyle = css`
    position: absolute;
    cursor: pointer;
    transform: translateY(-50%);
    display: none;

    ${({ theme }) => media(breakpoints(theme.breakpoints).up('L'))`
        display: block;
    `}
`;

export const CarouselWrapper = styled.div`
    position: relative;
`;

export const CarouselScroll = styled.ul<CarouselStyledProps>`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    ${({ theme, itemsCount }) =>
        itemsCount &&
        css`
            ${Object.entries(itemsCount)?.reduce(
                (acc, [key, value]) =>
                    `${acc}
                            ${breakpoints(theme.breakpoints).up(key as keyof BreakpointsTheme)}{
                                & > * {
                                    min-width: calc(100% / ${value});
                                }
                            }
                        `,
                ''
            )}
        `}
`;

export const LeftArrowIcon = styled(ArrowLeftIcon)<StyledNextPrevBtnProps>`
    ${commonStyle}
    left: -5.6rem;
    top: ${({ top }) => top || '50%'};
    visibility: ${({ disabled }) => disabled && 'hidden'};
    ${({ theme }) => media(breakpoints(theme.breakpoints).down('S'))`
        left: 0.6rem;
    `}
`;

export const RightArrowIcon = styled(ArrowRightIcon)<StyledNextPrevBtnProps>`
    ${commonStyle}
    right: -5.6rem;
    top: ${({ top }) => top || '50%'};
    visibility: ${({ disabled }) => disabled && 'hidden'};
    ${({ theme }) => media(breakpoints(theme.breakpoints).down('S'))`
        right: 0.6rem;
    `}
`;
