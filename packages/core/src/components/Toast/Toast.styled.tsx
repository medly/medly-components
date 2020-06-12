import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Button from '../Button';
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
`;

export const IconWrapper = styled('div')<StyledProps>`
    display: flex;
    background-color: ${({ theme, variant }) => theme.toast.bgColor[variant]};

    ${SvgIcon} {
        padding: 1.2rem;
        * {
            fill: ${fillColor};
        }
    }
`;

export const ContentWrapper = styled('div')`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.3rem 1.6rem;
    color: ${({ theme }) => theme.toast.textColor};
`;

export const ActionWrapper = styled('div')`
    display: flex;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0.8rem 0.8rem 0 0;

    ${Button.Style} {
        padding-top: 0.5rem;
    }
    ${SvgIcon} {
        transition: all 100ms ease-out;
        background-color: transparent;
        * {
            fill: ${({ theme }) => theme.colors.black};
        }

        &:hover {
            background-color: ${({ theme }) => theme.colors.grey[100]};
        }
    }
`;
