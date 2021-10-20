import { InjectClassName } from '@medly-components/utils';
import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';
import { BtnLoaderProps } from './types';

const fadesIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const BtnLoaderStyled = styled(InjectClassName)<BtnLoaderProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    font-size: ${({ size }) => (size === 'L' ? '2.6rem' : '2.2rem')};
    stop:first-child {
        stop-color: ${({ theme, variant }) => rgba(theme.button[variant].textColor.hovered, 0.2)};
    }
    stop:last-child {
        stop-color: ${({ theme, variant }) => theme.button[variant].textColor.hovered};
    }
    animation: ${fadesIn} 300ms linear;
    animation-delay: 200ms;
    animation-fill-mode: forwards;
`;
BtnLoaderStyled.displayName = 'BtnLoader';
