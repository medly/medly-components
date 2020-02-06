import { styled } from '@medly-components/utils';
import { GridTemplateProps } from '../types';
import { Props } from './types';

export const Row = styled('li').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<Props>`
    display: grid;
    position: relative;
    grid-template-rows: minmax(30px, auto);
    align-items: center;

    border-bottom: 1px solid #ededed;
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};

    & > * {
        background-color: ${({ theme, disabled }) => `${disabled ? theme.table.rowDisabledColor : theme.table.rowBackgroundColor}`};
    }
`;

export const NoResult = styled(Row)`
    text-align: center;
    line-height: 30px;
`;
