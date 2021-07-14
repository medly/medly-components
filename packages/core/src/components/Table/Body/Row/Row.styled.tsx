import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { GridTemplateProps } from '../../types';
import { defaultTableCellPaddings } from '../Cell/Styled';
import { StyledProps } from './types';

const cardStyle = css<StyledProps>`
    border: none;
    border-radius: 0.8rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    box-shadow: ${({ theme }) => `0 0.2rem 0.8rem ${rgba(theme.table.shadowColor, 0.2)} `};
    &,
    & > * {
        background-color: ${({ theme, isSelected, disabled }) =>
            theme.table.row.bgColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
        color: ${({ theme, isSelected, disabled }) => theme.table.row.textColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
    }

    &&& > * {
        &:first-child {
            &,
            &::before {
                transition: ${props => !props.isExpanded && 'border-radius 200ms ease-in'};
                border-radius: ${props => (props.isExpanded ? '0.8rem 0 0 0' : '0.8rem 0 0 0.8rem')};
            }

            &::before {
                width: 0.8rem;
            }
        }
        &:last-child {
            border-radius: ${props => (props.isExpandable ? '0 0 0.8rem 0' : '0 0.8rem 0.8rem 0')};
        }
        &:nth-last-child(3) {
            border-radius: ${props => props.isExpandable && (props.isExpanded ? '0 0.8rem 0 0' : '0 0.8rem 0.8rem 0')};
        }
        &:nth-last-child(2) {
            border-radius: ${props => props.isExpandable && '0 0 0 0.8rem'};
            &::before {
                width: 0.8rem;
                border-radius: 0 0 0 0.8rem;
            }
        }
    }

    &:hover {
        box-shadow: ${({ theme }) => `0 0.2rem 0.8rem ${rgba(theme.table.shadowColor, 0.35)} `};
    }

    &:not(:last-child) {
        margin-bottom: 0.8rem;
    }
`;

const getHoverState = (style: 'shadow' | 'outlined') => {
    let hoverState = css<StyledProps>`
        box-shadow: ${({ disabled, onClick, theme }) => !disabled && onClick && `0 0.2rem 0.4rem ${rgba(theme.table.shadowColor, 0.2)} `};
    `;
    if (style === 'outlined') {
        hoverState = css<StyledProps>`
            border-radius: 0.2rem;
            border: 0.2rem solid ${({ theme }) => theme.table.row.hoveredStyle.color};
            padding-bottom: 0;
        `;
    }
    return hoverState;
};

const normalStyle = css<StyledProps>`
    &&:hover {
        z-index: 2;
        ${({ theme }) => getHoverState(theme.table.row.hoveredStyle.style)};
    }

    &:nth-child(odd) {
        &,
        & > * {
            background-color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.bgColor[disabled ? 'disabled' : isSelected ? 'selected' : 'odd']};
            color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.textColor[disabled ? 'disabled' : isSelected ? 'selected' : 'odd']};
        }
    }

    &:nth-child(even) {
        &,
        & > * {
            background-color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.bgColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
            color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.textColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
        }
    }

    ${({ theme }) => theme.table.row.hoveredStyle.style === 'outlined' && `border: 2px solid transparent;`};

    &:not(:last-child) {
        border-bottom: 0.1rem solid ${({ theme }) => theme.table.row.separatorColor};
        ${({ theme }) => theme.table.row.hoveredStyle.style === 'outlined' && `padding-bottom: 0.1rem;`}
    }
`;

export const Row = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<StyledProps>`
    display: grid;
    position: relative;
    align-items: center;
    min-width: fit-content;
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    ${({ showRowWithCardStyle }) => (showRowWithCardStyle ? cardStyle : normalStyle)}
`;

export const NoResultCell = styled('td')<{ width: number; tableSize: keyof typeof defaultTableCellPaddings }>`
    text-align: center;
    padding: ${({ tableSize }) => defaultTableCellPaddings[tableSize]};
    width: ${({ width }) => `${width}px`};
`;

export const NoResultRow = styled(Row)<{ withMinimap?: boolean }>`
    justify-content: center;
    align-items: center;
    ${({ withMinimap }) => withMinimap && `min-height: 4.6rem;`}
`;
