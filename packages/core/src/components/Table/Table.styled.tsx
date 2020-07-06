import { clearMarginPadding, css, styled } from '@medly-components/utils';
import { TableStyledProps } from './types';

export const getBorder = (align: 'left' | 'right' | 'top' | 'bottom') => css`
    content: '';
    position: absolute;
    pointer-events: none;
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
    overflow: auto;
    display: block;
    border: 1px solid ${({ theme }) => theme.table.borderColor};
    border-radius: 0.8rem;
    border-collapse: separate;
    border-spacing: 0;
    ${clearMarginPadding}

    * {
        box-sizing: border-box;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.table.scrollBarColor};
    }

    &::-webkit-scrollbar-corner {
        background: transparent;
    }

    &::-webkit-scrollbar {
        height: 0.5rem;
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track:horizontal {
        margin: 0 0.4rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar-track:vertical {
        margin: 0.4rem 0;
        background-color: transparent;
    }
`;
