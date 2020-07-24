import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import { GridTemplateProps } from '../../types';
import { StyledProps } from './types';

const cardStyle = css<StyledProps>`
    border: none;
    border-radius: 0.8rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    box-shadow: ${({ theme }) => `0 0.2rem 0.8rem ${rgba(theme.table.shadowColor, 0.2)} `};
    & > * {
        background-color: ${({ theme, isSelected, disabled }) =>
            theme.table.row.bgColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
    }

    &&& > * {
        &:first-child {
            border-radius: ${props => (props.isExpanded ? '0.8rem 0 0  0' : '0.8rem 0 0 0.8rem')};
            &::before {
                width: 0.8rem;
                border-radius: ${props => (props.isExpanded ? '0.8rem 0 0  0' : '0.8rem 0 0 0.8rem')};
            }
        }
        &:last-child {
            border-radius: ${props => (props.isExpanded ? '0 0 0.8rem 0' : '0 0.8rem 0.8rem 0')};
        }
        &:nth-last-child(3) {
            border-radius: ${props => props.isExpanded && '0 0.8rem 0 0'};
        }
        &:nth-last-child(2) {
            border-radius: ${props => props.isExpanded && ' 0 0 0 0.8rem'};
            &::before {
                width: 0.8rem;
                border-radius: ${props => props.isExpanded && ' 0 0 0 0.8rem'};
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

const normalStyle = css<StyledProps>`
    &:hover {
        z-index: 2;
        box-shadow: ${({ disabled, onClick, theme }) => !disabled && onClick && `0 0.2rem 0.4rem ${rgba(theme.table.shadowColor, 0.2)} `};
    }

    &:nth-child(odd) {
        & > * {
            background-color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.bgColor[disabled ? 'disabled' : isSelected ? 'selected' : 'odd']};
        }
    }

    &:nth-child(even) {
        & > * {
            background-color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.bgColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
        }
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
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
    transition: box-shadow 100ms ease-out;
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    ${({ showRowWithCardStyle }) => (showRowWithCardStyle ? cardStyle : normalStyle)}
`;

export const NoResult = styled(Row)`
    text-align: center;
    line-height: 30px;
`;
