import { SvgIcon } from '@medly-components/icons';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
import { getBorder } from '../../Table.styled';

const frozen = () => css`
    z-index: 3;
    left: 0;
    * {
        z-index: 3;
    }
`;

export const HeadCellStyled = styled.th<{ hidden?: boolean; frozen?: boolean; align?: 'left' | 'right' | 'center' }>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: flex-end;
    padding: ${({ hidden }) => (hidden ? '0' : '0.8rem')};
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    position: ${({ frozen }) => (frozen ? 'sticky' : 'relative')};

    ${Checkbox.Style} {
        margin: 0.4rem;
    }

    ${props => props.frozen && frozen()}

    &:not(:last-child) {
        &::after {
            ${getBorder('right')}
        }
    }
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
