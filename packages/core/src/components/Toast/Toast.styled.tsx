import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Button from '../Button';
import Text from '../Text';
import { StyledProps } from './types';

const fillColor = ({ theme, variant }: StyledProps) => theme.toast.fillColor[variant];

export const Toast = styled('div')<StyledProps>`
    display: flex;
    flex-direction: row;
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
        * {
            fill: ${({ theme }) => theme.toast.textColor};
        }
    }
`;

export const SvgWrapper = styled('div')<StyledProps>`
    display: flex;
    background-color: ${({ theme, variant }) => theme.toast.bgColor[variant]};

    ${SvgIcon} {
        padding: 1.2rem;
        * {
            fill: ${fillColor};
        }
    }
`;

export const ToastContent = styled('div')`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.3rem 0 0.7rem 1.6rem;
    ${Button.Style} {
        position: absolute;
        padding: 0;
        right: 6.2rem;
        top: 1.3rem;

        ${Text.Style} {
            color: ${({ theme }) => theme.toast.buttonColor};
        }
    }
`;

export const IconWrapper = styled('div')`
    width: 32px;
    height: 32px;
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
    &:hover {
        background-color: ${({ theme }) => theme.toast.iconBg};
        border-radius: 50%;
    }
`;
