import { css } from 'styled-components';
import { PopoverPopupProps } from '../types';

const getPositionWithArrow = ({ placement }: PopoverPopupProps) => {
    switch (placement) {
        case 'top':
            return css`
                box-shadow: 0 0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: translateX(-50%);
                    top: 100%;
                    left: 50%;
                }
            `;
        case 'top-start':
            return css`
                box-shadow: 0 0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    top: 100%;
                    left: 2rem;
                }
            `;
        case 'top-end':
            return css`
                box-shadow: 0 0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    top: 100%;
                    right: 2rem;
                }
            `;
        case 'right':
            return css`
                box-shadow: -0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: translateY(-50%) rotate(90deg);
                    top: 50%;
                    right: calc(100% - 0.3rem);
                }
            `;
        case 'right-start':
            return css`
                box-shadow: -0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: rotate(90deg);
                    top: 2rem;
                    right: calc(100% - 0.3rem);
                }
            `;
        case 'right-end':
            return css`
                box-shadow: -0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: rotate(90deg);
                    bottom: 2rem;
                    right: calc(100% - 0.3rem);
                }
            `;
        case 'bottom':
            return css`
                box-shadow: 0 -0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: translateX(-50%) rotate(180deg);
                    left: 50%;
                    bottom: 100%;
                }
            `;
        case 'bottom-start':
            return css`
                box-shadow: 0 -0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: rotate(180deg);
                    left: 2rem;
                    bottom: 100%;
                }
            `;
        case 'bottom-end':
            return css`
                box-shadow: 0 -0.4rem 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: rotate(180deg);
                    right: 2rem;
                    bottom: 100%;
                }
            `;
        case 'left':
            return css`
                box-shadow: 0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: translateY(-50%) rotate(270deg);
                    top: 50%;
                    left: calc(100% - 0.3rem);
                }
            `;
        case 'left-start':
            return css`
                box-shadow: 0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: rotate(270deg);
                    top: 2rem;
                    left: calc(100% - 0.3rem);
                }
            `;
        case 'left-end':
            return css`
                box-shadow: 0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
                &::after {
                    transform: rotate(270deg);
                    bottom: 2rem;
                    left: calc(100% - 0.3rem);
                }
            `;
    }
};

export const getStyleWithArrow = css<PopoverPopupProps>`
    border-radius: 0.8rem;
    padding: 1.5rem 2rem;

    &::after {
        content: '';
        width: 0;
        height: 0;
        z-index: 4;
        position: absolute;
        border-left: 0.8rem solid transparent;
        border-right: 0.8rem solid transparent;
        border-top: 1rem solid ${({ bgColor }) => bgColor};
    }

    ${getPositionWithArrow}
`;
