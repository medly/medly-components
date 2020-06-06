import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../Text';
import { StyledProps } from './types';

// @ts-ignore
const fillColor = ({ theme, variant }: StyledProps) => theme.toast[`${variant}`];
// @ts-ignore
const bgColor = ({ theme, variant }: StyledProps) => theme.toast[`${variant}`];

export const Toast = styled('div')<StyledProps>`
    display: flex;
    position: relative;
    align-items: stretch;
    min-width: 25rem;
    box-shadow: 0 0.8rem 3.2rem ${({ theme }) => theme.toast.boxShadow};
    border-radius: 0.4rem;
    border-left: 0.4rem solid ${fillColor};

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
    background-color: ${bgColor};

    ${SvgIcon} {
        padding: 1.2rem;
        * {
            fill: ${fillColor};
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
