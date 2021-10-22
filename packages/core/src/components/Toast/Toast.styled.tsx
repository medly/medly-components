import { SvgIcon } from '@medly-components/icons';
import { WithThemeProp } from '@medly-components/utils';
import styled from 'styled-components';
import Button from '../Button';
import { StyledToastProps } from './types';

const fillColor = ({ theme, variant }: StyledToastProps & WithThemeProp) => theme?.toast.fillColor[variant];

export const Toast = styled('div')<StyledToastProps>`
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: stretch;
    box-shadow: 0 0.8rem 3.2rem ${({ theme }) => theme.toast.boxShadow};
    border-radius: 0.4rem;
    border-left: 0.4rem solid ${fillColor};
    min-width: ${({ fullWidth }) => (fullWidth ? '100%' : '25rem')};

    @media (min-width: 768px) and (max-width: 1439px) {
        max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '72%')};
    }

    @media (min-width: 1440px) {
        max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '103.6rem')};
    }
`;

export const IconWrapper = styled('div')<StyledToastProps>`
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
