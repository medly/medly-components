import styled from 'styled-components';
import { DrawerStyledProps } from './types';

export const DrawerBackground = styled('div')<{ open?: boolean; withOverlay?: boolean }>`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    position: fixed;
    animation: ${({ withOverlay, open }) =>
        withOverlay ? `${open ? 'drawerFadeIn' : 'drawerFadeOut'} 0.4s cubic-bezier(0, 0, 0.33, 1) forwards` : 'none'};

    @keyframes drawerFadeIn {
        0% {
            background-color: transparent;
        }
        100% {
            background-color: ${({ theme }) => theme.drawer.overlayColor};
        }
    }

    @keyframes drawerFadeOut {
        0% {
            background-color: ${({ theme }) => theme.drawer.overlayColor};
        }
        100% {
            background-color: transparent;
        }
    }
`;

export const DrawerStyled = styled('aside')<DrawerStyledProps>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    width: ${props => props.width};
    position: fixed;
    top: 0;
    box-shadow: ${({ open }) => open && '0 4px 32px 0 rgb(67, 84, 101, 50%)'};
    box-sizing: border-box;
    animation: ${({ open }) => `${open ? 'drawerSlideIn' : 'drawerSlideOut'} 0.4s cubic-bezier(0, 0, 0.33, 1) forwards`};

    @keyframes drawerSlideIn {
        0% {
            left: ${({ width, position }) => position === 'left' && `-${width}`};
            right: ${({ width, position }) => position === 'right' && `-${width}`};
        }
        100% {
            left: ${({ position }) => position === 'left' && 0};
            right: ${({ position }) => position === 'right' && 0};
        }
    }

    @keyframes drawerSlideOut {
        0% {
            left: ${({ position }) => position === 'left' && 0};
            right: ${({ position }) => position === 'right' && 0};
        }
        100% {
            left: ${({ width, position }) => position === 'left' && `-${width}`};
            right: ${({ width, position }) => position === 'right' && `-${width}`};
        }
    }
`;
