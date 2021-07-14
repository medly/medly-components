import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Checkbox from '../../../../Checkbox';
import { RowActionProps } from './types';

const getRowHoverStateBorderStyle = (style: 'shadow' | 'outlined') => {
    let state = css`
        left: 0;
        top: 0;
        height: 100%;
    `;

    if (style === 'outlined') {
        state = css`
            left: -0.2rem;
            top: -0.2rem;
            height: calc(100% + 0.4rem);
        `;
    }

    return state;
};

const selectedBorderStyle = css<RowActionProps>`
        &&& {
            &::before {
                content: '';
                z-index: 2;
                width: 0.4rem;
                position: absolute;
                background-color: ${({ theme }) => theme.table.row.selectedBorderColor};
                ${({ theme }) => getRowHoverStateBorderStyle(theme.table.row.hoveredStyle.style)}
            }
        }
    `,
    shadowStyle = css<RowActionProps>`
        &::after {
            content: '';
            right: -1.2rem;
            height: 100%;
            width: 1.2rem;
            position: absolute;
            background: ${({ theme }) =>
                `linear-gradient(to right, ${rgba(theme.table.shadowColor, 0.15)}, ${rgba(theme.table.shadowColor, 0)}) `};
        }
    `;

export const RowActionsCellStyled = styled('td')<RowActionProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: ${({ isRowExpandable, isRowSelectable }) => (isRowExpandable && !isRowSelectable ? 'center' : 'flex-end')};
    padding-right: ${({ tableSize, isRowSelectable }) => isRowSelectable && (tableSize === 'L' ? '2rem' : '1.2rem')};
    padding-left: ${({ isLoading, tableSize }) => isLoading && (tableSize === 'L' ? '2rem' : '1.2rem')};
    overflow: visible;
    cursor: default;
    position: sticky;
    left: ${({ isGroupedTable }) => (isGroupedTable ? '4.8rem' : '0')};
    z-index: 1;
    * {
        z-index: 1;
    }

    & > ${Checkbox.Style} {
        padding: 0;
    }

    & > ${SvgIcon} {
        padding: ${({ tableSize }) => (tableSize === 'XS' ? '0.2rem' : '0.6rem')};
        border-radius: 50%;
        * {
            fill: ${({ theme }) => theme.colors.black};
        }
        transition: transform 200ms ease-out, background-color 100ms ease-out;
        transform: ${props => props.isRowExpanded && `rotate(180deg) `};

        &:hover {
            background-color: ${({ theme, isRowSelected }) =>
                theme.table.accordionIcon.bgColor.hover[isRowSelected ? 'selected' : 'default']};
        }

        &:active {
            background-color: ${({ theme, isRowSelected }) =>
                theme.table.accordionIcon.bgColor.pressed[isRowSelected ? 'selected' : 'default']};
        }
    }

    & > ${SvgIcon} + ${Checkbox.Style} {
        margin-left: ${({ tableSize }) => (tableSize === 'L' ? '1.8rem' : '0.8rem')};
    }

    ${props => props.showShadowAtRight && shadowStyle};
    ${props => props.isRowSelected && selectedBorderStyle}
`;
