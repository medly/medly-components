import { CardTheme, defaultTheme } from '@medly-components/theme';
import { boolean } from '@storybook/addon-knobs';
import React, { SFC, useState } from 'react';
import { CardsTable } from '../CardsTable';
import columns from './columns';
import data from './data';
import { filterData } from './filterData';
import { ColumnConfig, SortOrder } from '../types';
import { DarkBackground } from './GlobalStyle.styled';

export const Theme: React.SFC<CardTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.cardsTable
};
export const ColumnConfigInterface: SFC<ColumnConfig> = () => null;

export const Basic = () => {
    const [cardsTableData, setCardsTableData] = useState(data);
    const handleFilterData = (dottedField: string, order: SortOrder) => {
            filterData(dottedField, order, cardsTableData, setCardsTableData);
        };
    return (
        <>
            <DarkBackground />
            <CardsTable 
                data={cardsTableData}
                onSort={handleFilterData}
                columns={columns}
                onRowClick={() => null}
            />
        </>
    )
};

export const MultiLine = () => {
    const [cardsTableData, setCardsTableData] = useState(data);
    const handleFilterData = (dottedField: string, order: SortOrder) => {
        filterData(dottedField, order, cardsTableData, setCardsTableData);
    };
return (
    <CardsTable 
        data={cardsTableData}
        onSort={handleFilterData}
        columns={columns}
        rowClickDisableKey={''}
        onRowClick={() => null}
        withLightTheme
    />)
}
