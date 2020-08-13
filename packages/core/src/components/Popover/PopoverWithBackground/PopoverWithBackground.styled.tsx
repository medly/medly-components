import { css, fullHeight, fullWidth, styled } from '@medly-components/utils';
import { Placement } from '../types';
import { Props } from './types';

export const PopoverContent = styled('div')<Props>`
    background-color: white;
    border-radius: 0.8rem;
    position: relative;
    padding: 1.5rem 2rem;
    &::after {
        width: 0;
        height: 0;
        z-index: 10;
        position: absolute;
        border-left: 0.8rem solid transparent;
        border-right: 0.8rem solid transparent;
        border-top: 1rem solid #fff;
        content: '';
    }
`;

const getStyle = (placement: Placement) => {
    switch (placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
            return css`
                bottom: calc(100% + 1.5rem);
                ${PopoverContent} {
                    box-shadow: 0 0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                    &::after {
                        transform: translateX(-50%);
                        top: 100%;
                        left: 50%;
                    }
                }
            `;
        case 'right':
        case 'right-start':
        case 'right-end':
            return css`
                left: calc(100% + 1.5rem);
                ${PopoverContent} {
                    box-shadow: -0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                    &::after {
                        transform: translateY(-50%) rotate(90deg);
                        top: 50%;
                        right: calc(100% - 0.3rem);
                    }
                }
            `;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
            return css`
                top: calc(100% + 1.5rem);
                ${PopoverContent} {
                    box-shadow: 0 -0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                    &::after {
                        transform: translateX(-50%) rotate(180deg);
                        left: 50%;
                        bottom: 100%;
                    }
                }
            `;
        case 'left':
        case 'left-start':
        case 'left-end':
            return css`
                right: calc(100% + 1.5rem);
                ${PopoverContent} {
                    box-shadow: 0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                    &::after {
                        transform: translateY(-50%) rotate(270deg);
                        top: 50%;
                        left: calc(100% - 0.3rem);
                    }
                }
            `;
    }
};

export const PopoverStyled = styled('div')<Props>`
    position: absolute;
    z-index: 1000;
    transition: all 2ms ease-in-out;
    align-self: center;
    ${props => props.fullWidth && fullWidth()};
    ${props => props.fullHeight && fullHeight()};
    ${({ placement }) => getStyle(placement)}
`;
