import { CardTableTheme, defaultTheme } from '@medly-components/theme';
import React, { SFC, useCallback, useState } from 'react';
import { CardTable } from '../CardTable';
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
ColumnConfigInterface.defaultProps = {
    align: 'left',
    flex: 1
};

export const WithGreyBackground = () => {
    const [cardTableData, setCardTableData] = useState(data);
    const handleFilterData = (dottedField: string, order: SortOrder) => {
            filterData(dottedField, order, cardTableData, setCardTableData);
        },
        handleRowClick = useCallback((): null => null, []);

    return (
        <>
            <DarkBackground />
            <CardTable data={cardTableData} onSort={handleFilterData} columns={columns} onRowClick={handleRowClick} />
        </>
    );
};

export const WithWhiteBackground = () => {
    const [cardTableData, setCardTableData] = useState(data);
    const handleFilterData = (dottedField: string, order: SortOrder) => {
            filterData(dottedField, order, cardTableData, setCardTableData);
        },
        handleRowClick = useCallback((): null => null, []);

    return (
        <CardTable
            data={cardTableData}
            onSort={handleFilterData}
            columns={columns}
            rowClickDisableKey={''}
            onRowClick={handleRowClick}
            withWhiteBackground
        />
    );
};
