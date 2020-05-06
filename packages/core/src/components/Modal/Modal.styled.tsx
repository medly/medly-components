import { centerAligned, styled } from '@medly-components/utils';

export const ModalBackgroundStyled = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(67, 84, 101, 0.65);
    box-shadow: 5px 5px 5px -4px rgba(67, 84, 101, 0.5);
    z-index: 1000;
    ${centerAligned()}
`;
