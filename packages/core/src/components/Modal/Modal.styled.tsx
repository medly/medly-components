import { centerAligned, styled } from '@medly-components/utils';

export const ModalBackgroundStyled = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    ${centerAligned()}
`;
