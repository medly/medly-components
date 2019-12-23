import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Popup = styled('div')<Props>`
    background: ${({ theme }) => theme.modal.bgColor};
    padding: ${({ theme }) => theme.spacing.L} ${({ theme }) => theme.spacing.XL};
    border-radius: 5px;
    max-height: 80%;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    min-width: ${({ minWidth }) => (minWidth ? minWidth : `50%`)};
    min-height: ${({ minHeight }) => (minHeight ? minHeight : `auto`)};
`;

Popup.defaultProps = {
    theme: defaultTheme
};
