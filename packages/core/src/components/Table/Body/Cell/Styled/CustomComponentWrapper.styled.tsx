import { styled } from '@medly-components/utils';
import { TableColumnConfig } from '../../../types';

export const CustomComponentWrapper = styled('div')<{ align: TableColumnConfig['align'] }>`
    width: 100%;
    display: flex;
    justify-content: ${({ align }) => align};
`;
