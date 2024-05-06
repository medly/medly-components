import { DeleteIcon, RemoveCircleIcon } from '@medly-components/icons';
import { TableTheme, defaultTheme } from '@medly-components/theme';
import type { FCC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from '../../Button';
import Text from '../../Text';
import { RowHoverActionsType, TableColumnConfig, TableProps } from '../types';

export const ThemeInterface: FCC<TableTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.table
};

export const ExpandedRowComponent: TableProps['expandedRowComponent'] = ({ rowData }) => <Text> Hello {`${rowData?.name}`}</Text>;

export const ColumnConfigInterface: FCC<TableColumnConfig> = () => null;

export const DarkBackground = createGlobalStyle<{ showRowWithCardStyle?: boolean }>`
#root, #story--core-tabs--basic, #story--tabs--with-grey-background {
    background: ${({ showRowWithCardStyle }) => showRowWithCardStyle && 'rgba(229, 229, 229, 0.3)'} }
`;

const RowHoverActionsContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1.2rem;
`;

const StyledButton = styled(Button)`
    padding: 0.7rem;
    border-radius: 0.4rem;
`;

export const Actions = [
    <StyledButton size="S" variant="solid" key="key1">
        <RemoveCircleIcon size="S" />
        Lorem
    </StyledButton>,
    <StyledButton size="S" variant="solid" key="key2">
        <RemoveCircleIcon size="S" />
        Lorem ipsum
    </StyledButton>
];

export const RowHoverActions: RowHoverActionsType = () => (
    <RowHoverActionsContainer>
        <DeleteIcon />
    </RowHoverActionsContainer>
);

export const DummyWrapper = styled('div')`
    padding-top: 3.2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
