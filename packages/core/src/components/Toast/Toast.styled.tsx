import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../Text';
import { StyledProps } from './types';

export const Toast = styled('div')<StyledProps>`
    display: flex;
    position: relative;
    align-items: stretch;
    min-width: 25rem;
    box-shadow: 0 0.8rem 3.2rem ${({ theme }) => theme.toast.boxShadow};
    border-radius: 0.4rem;
    border-left: 0.4rem solid ${({ theme, variant }) => theme.toast.fillColor[variant]};

    ${Text.Style} {
        color: ${({ theme }) => theme.toast.textColor};
    }

    & > ${SvgIcon} {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        * {
            fill: ${({ theme }) => theme.toast.textColor};
        }
    }
`;

export const SvgWrapper = styled('div')<StyledProps>`
    background-color: ${({ theme, variant }) => theme.toast.bgColor[variant]};

    ${SvgIcon} {
        padding: 1.2rem;
        * {
            fill: ${({ theme, variant }) => theme.toast.fillColor[variant]};
        }
    }
`;

export const ToastContent = styled('div')`
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    flex-grow: 1;
    padding: 1.3rem 1.6rem;
`;
