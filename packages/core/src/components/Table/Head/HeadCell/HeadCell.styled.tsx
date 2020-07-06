import { SvgIcon } from '@medly-components/icons';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
import { getBorder } from '../../Table.styled';
import { HeadCellStyledProps } from './types';

const frozenStyle = css`
        z-index: 3;
        left: 0;
        * {
            z-index: 3;
        }
    `,
    shadowStyle = css`
        &&& {
            overflow: visible;
            &::after {
                content: '';
                right: -1.2rem;
                height: 100%;
                width: 1.2rem;
                position: absolute;
                background: ${({ theme }) =>
                    `linear-gradient(to right, ${rgba(theme.table.shadowColor, 0.15)}, ${rgba(theme.table.shadowColor, 0)}) `};
            }
        }
    `;

export const HeadCellStyled = styled.th<HeadCellStyledProps>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: flex-end;
    padding: ${({ hidden }) => (hidden ? '0' : '0.8rem')};
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    position: ${({ frozen }) => (frozen ? 'sticky' : 'relative')};

    &:not(:last-child) {
        &::after {
            ${getBorder('right')}
        }
    }

    ${Checkbox.Style} {
        margin: 0.4rem;
    }

    ${props => props.frozen && frozenStyle}
    ${props => props.showShadowAtRight && shadowStyle}
`;

export const ResizeHandler = styled('span')`
    ${clearMarginPadding()};
    width: 0.3rem;
    height: 100%;
    top: 0;
    right: 0;
    cursor: ew-resize;
    position: absolute;
`;
const getStyle = (styleType: 'default' | 'hovered' | 'pressed' | 'selected') => css`
    background-color: ${({ theme }) => theme.table.header.cell.bgColor[styleType]};
    color: ${({ theme }) => theme.table.header.cell.textColor[styleType]};
    ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.table.header.cell.textColor[styleType]};
        }
    }
`;

export const HeadCellButton = styled.button<{ withHoverEffect: boolean; isSelected: boolean }>`
    border: 0;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0.9rem 0.8rem 1.1rem;
    outline: unset;
    font-family: inherit;
    border-radius: 0.8rem;
    cursor: ${({ withHoverEffect }) => (withHoverEffect ? 'pointer' : 'default')};
    ${({ isSelected }) => getStyle(isSelected ? 'selected' : 'default')}

    &:hover {
        ${({ isSelected, withHoverEffect }) => withHoverEffect && !isSelected && getStyle('hovered')}
    }

    &:active {
        ${getStyle('pressed')}
    }

    ${Text.Style} {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
    }
    ${SvgIcon} {
        margin-left: 0.4rem;
    }
`;
