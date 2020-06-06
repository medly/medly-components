import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../Text';
import { StyledProps } from './types';

export const Toast = styled('div')<StyledProps>`
    display: flex;
    align-items: stretch;
    min-width: 250px;
    padding-right: 8px;
    box-shadow: 0 8px 32px ${({ theme }) => theme.toast.boxShadow};
    border-radius: 4px;
    border-left: 4px solid ${({ theme, variant }) => theme.toast.fillColor[variant]};

    ${Text.Style} {
        color: ${({ theme }) => theme.toast.textColor};
    }

    ${SvgIcon} {
        padding: 12px;
        * {
            fill: ${({ theme }) => theme.toast.textColor};
        }
    }
`;

export const SvgWrapper = styled('div')<StyledProps>`
    background-color: ${({ theme, variant }) => theme.toast.bgColor[variant]};

    ${SvgIcon} {
        * {
            fill: ${({ theme, variant }) => theme.toast.fillColor[variant]};
        }
    }
`;

export const ToastContent = styled('div')`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 4px 0 4px 20px;
`;
