import { breakpoints, media } from '@medly-components/utils';
import styled from 'styled-components';
import { StyledProps } from './types';

export const Content = styled('div')<StyledProps>`
    flex: 1;
    box-sizing: border-box;
    overflow: auto;
    padding: ${({ theme }) => theme.modal.padding.content.mobile};

    ${({ theme, overflowVisible }) => media(breakpoints(theme.breakpoints).up('M'))`
        padding: ${theme.modal.padding.content.desktop};
        overflow: ${overflowVisible ? `visible` : `auto`};
        padding: ${theme.modal.padding.content.desktop};

        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 1rem;
            background-color: ${theme.modal.scrollbarThumbColor};
        }
    `}
`;
