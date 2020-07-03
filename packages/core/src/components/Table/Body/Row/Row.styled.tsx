import { css, styled } from '@medly-components/utils';
import { GridTemplateProps } from '../../types';
import { Props } from './types';

const selectedBorder = css`
    &&& {
        &::before {
            content: '';
            left: 0;
            top: -0.05rem;
            z-index: 2;
            height: calc(100% + 0.1rem);
            width: 0.4rem;
            position: absolute;
            background-color: ${({ theme }) => theme.table.row.selectedBorderColor};
        }
    }
`;

export const Row = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<Props>`
    min-width: fit-content;
    display: grid;
    position: relative;
    align-items: center;
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};

    &:hover {
        z-index: 2;
        box-shadow: ${({ disabled, onClick, theme }) => !disabled && onClick && `0 0.2rem 0.4rem ${theme.table.row.shadowColor} `};
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

    ${({ isSelected }) => isSelected && selectedBorder}
`;

export const NoResult = styled(Row)`
    text-align: center;
    line-height: 30px;
`;
