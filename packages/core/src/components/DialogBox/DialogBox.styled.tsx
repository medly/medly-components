import { styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { DialogBoxBackgroundProps } from './types';

export const DialogBoxBackgroundStyled = styled.div<DialogBoxBackgroundProps>`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.modal.overlayColor};
    z-index: 1000;
    align-items: center;
    animation: ${({ open }) => `${open ? 'bgFadeIn' : 'bgFadeOut'} 0.4s cubic-bezier(0, 0, 0.33, 1) `};
    overflow: hidden;
    
    @keyframes bgFadeIn {
        0% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0)};
        }
        100% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0.65)};
        }
    }

    @keyframes bgFadeOut {
        0% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0.65)};
        }
        100% {
            background: ${({ theme }) => rgba(theme.modal.overlayColor, 0)};
        }
    }
`;
