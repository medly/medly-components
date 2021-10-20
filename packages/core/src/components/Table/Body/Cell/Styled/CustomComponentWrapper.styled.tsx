import styled from 'styled-components';
import { TableColumnConfig } from '../../../types';

export const CustomComponentWrapper = styled('div')<{ align: TableColumnConfig['align'] }>`
    width: fit-content;
    display: flex;
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};
`;
