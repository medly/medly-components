import { CardTableTheme, defaultTheme } from '@medly-components/theme';
import React, { SFC, useState } from 'react';
import { CardsTable } from '../CardsTable';
import { ColumnConfig, SortOrder } from '../types';
import columns from './columns';
import data from './data';
import { filterData } from './filterData';
import { DarkBackground } from './GlobalStyle.styled';

export const Theme: React.SFC<CardTableTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.cardTable
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
            <CardsTable data={cardsTableData} onSort={handleFilterData} columns={columns} onRowClick={() => null} />
        </>
    );
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
            withWhiteBackground
        />
    );
};
