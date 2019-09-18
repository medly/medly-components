import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../Text';
import { StyledProps } from './types';

// @ts-ignore
const getColor = ({ theme, variant }: StyledProps) => theme.toast[`${variant}Color`];

export const Toast = styled('div')<StyledProps>`
    border-radius: 5px;
    display: flex;
    align-items: center;
    min-height: 50px;
    max-height: 50px;
    min-width: 250px;
    justify-content: space-between;
    padding: 0 20px;
    margin: 5px;
    opacity: ${({ show }) => (show ? 1 : 0)};
    transition: opacity 0.3s ease;

    background-color: ${getColor};

    ${Text.Style} {
        color: ${({ theme }) => theme.toast.textColor};
        margin: 0px 10px;
    }
    ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.toast.textColor};
        }
    }
`;
