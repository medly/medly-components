import React, { useCallback, useContext, useState } from 'react';
import { loadingBodyData } from '../../constants';
import { TablePropsContext } from '../../TableProps.context';
import { Data } from '../../types';
import ContentRow from './ContentRow';
import TitleRow from './TitleRow';
import { Props } from './types';

export const GroupedRow: React.FC<Props> = React.memo(props => {
    const [isRowExpanded, setExpansionState] = useState(false),
        [isLoading, setLoadingState] = useState(true),
        [groupedData, setGroupedData] = useState<Data>(loadingBodyData),
        tableProps = useContext(TablePropsContext),
        { columns, groupBy, getGroupedData } = tableProps,
        { id, data, selectedRowIds, onRowSelection, showShadowAfterFrozenElement } = props;

    const handleExpansion = useCallback(async () => {
        setLoadingState(true);
        setExpansionState(val => !val);
        const dt = await getGroupedData(data[groupBy], 0, 1000);
        setLoadingState(false);
        setGroupedData(dt);
    }, [groupBy, isRowExpanded]);

    return (
        <>
            <TitleRow
                id={`${id}-title-row`}
                data={data}
                isRowExpanded={isRowExpanded}
                onRowSelection={onRowSelection}
                selectedRowIds={selectedRowIds}
                onClick={handleExpansion}
                showShadowAfterFrozenElement={showShadowAfterFrozenElement}
            />
            <TablePropsContext.Provider value={{ ...tableProps, columns: columns.slice(1), isLoading }}>
                <ContentRow isRowExpanded={isRowExpanded} {...{ ...props, id: `${id}-content-row`, data: groupedData }} />
            </TablePropsContext.Provider>
        </>
    );
});
GroupedRow.displayName = 'GroupedRow';
