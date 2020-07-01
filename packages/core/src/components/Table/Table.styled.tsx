import { css, styled } from '@medly-components/utils';
import { TableStyledProps } from './types';

export const getBorder = (align: 'left' | 'right' | 'top' | 'bottom') => css`
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.table.borderColor};
    height: ${align === 'left' || align === 'right' ? 'calc(100% - 3.2rem)' : `1px`};
    width: ${align === 'top' || align === 'bottom' ? 'calc(100% - 3.2rem)' : `1px`};
    left: ${align === 'top' || align === 'bottom' ? '50%' : align === 'left' && '0'};
    right: ${align === 'right' && '0'};
    top: ${align === 'left' || align === 'right' ? '50%' : align === 'top' && '0'};
    bottom: ${align === 'bottom' && '0'};
    transform: ${align === 'left' || align === 'right' ? 'translateY(-50%)' : `translateX(-50%) `};
`;

export const TableStyled = styled('table')<TableStyledProps>`
    margin: 0;
    padding: 0;
    overflow: auto;
    display: block;
    border: 1px solid ${({ theme }) => theme.table.borderColor};
    border-radius: 0.8rem;

    * {
        box-sizing: border-box;
    }

    &::-webkit-scrollbar {
        height: 0.5rem;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        margin: 0 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.table.scrollBarColor};
    }
`;
