import { css, getFontStyle, styled } from '@medly-components/utils';
import { TableStyledProps } from './types';

export const HiddenDiv = styled('div')`
    position: absolute;
    left: -1000px;
    ${({ theme }) => getFontStyle({ theme, fontVariant: 'body2' })}
`;

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
    border: ${({ showRowWithCardStyle, theme }) => !showRowWithCardStyle && `1px solid ${theme.table.borderColor}`};
    padding: ${({ showRowWithCardStyle }) => (showRowWithCardStyle ? '0 0 0.8rem 0' : 0)};
    border-radius: 0.8rem;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;

    *:not(svg) {
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
        background-color: transparent;
        border-top: ${({ showRowWithCardStyle, theme }) => !showRowWithCardStyle && `0.1rem solid ${theme.table.borderColor}`};
    }

    &::-webkit-scrollbar-track:vertical {
        background-color: transparent;
        border-left: ${({ showRowWithCardStyle, theme }) => !showRowWithCardStyle && `0.1rem solid ${theme.table.borderColor}`};
    }
`;
