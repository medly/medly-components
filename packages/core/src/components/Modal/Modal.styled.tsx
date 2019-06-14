import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled } from '@medly-components/utils';
import { Props } from './types';

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

export const ModalStyled = styled('div')`
    background: ${({ theme }) => theme.modal.bgColor};
    padding: ${({ theme }) => theme.spacing.L} ${({ theme }) => theme.spacing.XL};
    border-radius: 5px;
    width: 50%;
    height: auto;
    max-height: 80%;
    overflow: hidden;
    overflow-y: auto;
`;

ModalStyled.defaultProps = {
    theme: defaultTheme
};
