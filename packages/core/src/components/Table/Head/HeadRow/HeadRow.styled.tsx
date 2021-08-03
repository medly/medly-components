import { styled } from '@medly-components/utils';
import { GridTemplateProps } from '../../types';
import { HeadRowProps } from './types';

export const HeadRow = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<HeadRowProps>`
    display: grid;
    align-items: end;
    user-select: none;
    margin: ${({ showRowWithCardStyle }) => showRowWithCardStyle && '0 0.8rem 1.6rem'};

    & > * {
        background-color: ${({ theme }) => theme.table.header.bgColor};
        border-bottom: ${({ showRowWithCardStyle, theme }) => !showRowWithCardStyle && `1px solid ${theme.table.borderColor}`};

        &:first-child {
            border-radius: ${({ showRowWithCardStyle }) => showRowWithCardStyle && '0.8rem 0 0 0.8rem'};
        }
        &:last-child {
            border-radius: ${({ showRowWithCardStyle }) => showRowWithCardStyle && '0 0.8rem 0.8rem 0'};
        }
    }
`;
