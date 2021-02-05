import { RemoveCircleIcon } from '@medly-components/icons';
import { defaultTheme, TableTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import Button from '../../Button';
import Text from '../../Text';
import { RowHoverActionsType, TableColumnConfig, TableProps } from '../types';

export const ThemeInterface: FC<TableTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.table
};

export const ExpandedRowComponent: TableProps['expandedRowComponent'] = ({ rowData }) => <Text> Hello {`${rowData.name}`}</Text>;

export const ColumnConfigInterface: FC<TableColumnConfig> = () => null;

export const DarkBackground = createGlobalStyle<{ showRowWithCardStyle?: boolean }>`
#root, #story--core-tabs--basic, #story--tabs--with-grey-background {
    background: ${({ showRowWithCardStyle }) => showRowWithCardStyle && 'rgba(229, 229, 229, 0.3)'} }
`;

const RowHoverActionsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    & > ${Button.Style} {
        margin: 0.8rem 0.8rem;
        height: 3.2rem;
    }
    & > :not(:first-child) {
        margin-left: 0;
    }
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

export const RowHoverActions: RowHoverActionsType = props => {
    const { rowId, rowData } = props;

    if (rowData.disabled) return;
    return (
        <RowHoverActionsContainer>
            <StyledButton size="S" variant="solid" key="key1">
                <RemoveCircleIcon size="S" />
                {`Row ID: ${rowId}`}
            </StyledButton>
            <StyledButton size="S" variant="solid" key="key2">
                <RemoveCircleIcon size="S" />
                {rowData.name}
            </StyledButton>
        </RowHoverActionsContainer>
    );
};

export const DummyWrapper = styled('div')`
    padding-top: 3.2rem;
`;
