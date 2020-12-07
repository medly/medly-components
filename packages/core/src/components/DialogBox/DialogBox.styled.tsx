import { styled } from '@medly-components/utils';
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
`;
