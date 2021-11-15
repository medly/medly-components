import { CardTableTheme, defaultTheme } from '@medly-components/theme';
import { useCallback, useState } from 'react';
import { CardTable } from '../CardTable';
import { ColumnConfig, SortOrder } from '../types';
import columns from './columns';
import data from './data';
import { filterData } from './filterData';
import { DarkBackground } from './GlobalStyle.styled';
import type { FC } from 'react';

export const Theme: FC<CardTableTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.cardTable
};
export const ColumnConfigInterface: FC<ColumnConfig> = () => null;
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
