import { CardTableTheme, defaultTheme } from '@medly-components/theme';
import type { FCC } from 'react';
import { useCallback, useState } from 'react';
import { CardTable } from '../CardTable';
import { ColumnConfig, SortOrder } from '../types';
import { DarkBackground } from './GlobalStyle.styled';
import columns from './columns';
import data from './data';
import { filterData } from './filterData';

export const Theme: FCC<CardTableTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.cardTable
};
export const ColumnConfigInterface: FCC<ColumnConfig> = () => null;
ColumnConfigInterface.defaultProps = {
    fraction: 1,
    align: 'left'
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
            <CardTable
                defaultSortField="patientInfo"
                defaultSortOrder="desc"
                rowClickDisableKey="disabled"
                data={cardTableData}
                onSort={handleFilterData}
                columns={columns}
                onRowClick={handleRowClick}
            />
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
            defaultSortField="patientInfo"
            defaultSortOrder="desc"
            rowClickDisableKey="disabled"
            data={cardTableData}
            onSort={handleFilterData}
            columns={columns}
            onRowClick={handleRowClick}
            withWhiteBackground
        />
    );
};
