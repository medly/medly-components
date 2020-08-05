import { useUpdateEffect } from '@medly-components/utils';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { loadingBodyData } from '../../constants';
import { TablePropsContext } from '../../TableProps.context';
import { Data } from '../../types';
import useRowSelector from '../../useRowSelector';
import ContentRow from './ContentRow';
import TitleRow from './TitleRow';
import { Props } from './types';

export const GroupedRow: React.FC<Props> = React.memo(props => {
    const tableProps = useContext(TablePropsContext),
        { columns, groupBy, rowIdentifier, getGroupedData, rowSelectionDisableKey } = tableProps,
        {
            id,
            titleRowData,
            addColumnMaxSize,
            selectedTitleRowIds,
            onTitleRowSelection,
            showShadowAfterFrozenElement,
            onGroupedRowSelection,
            setSelectAllDisableState
        } = props;

    const [isRowExpanded, setExpansionState] = useState(false),
        [isLoading, setLoadingState] = useState(true),
        [groupedRows, setGroupedRows] = useState<Data>(loadingBodyData);

    const isTitleRowSelected = useMemo(() => !isLoading && selectedTitleRowIds.includes(id), [id, isLoading, selectedTitleRowIds]),
        isTitleRowSelectionDisable = useMemo(() => {
            const isDisabled = groupedRows.every(dt => dt[rowSelectionDisableKey]);
            !isDisabled && setSelectAllDisableState(false);
            return isDisabled;
        }, [groupedRows, rowSelectionDisableKey]),
        rowSelector = useRowSelector({ data: groupedRows, rowSelectionDisableKey, rowIdentifier }),
        { uniqueIds, isAnyRowSelected, areAllRowsSelected, selectedIds, toggleId, setSelectedIds } = rowSelector;

    const handleExpansion = useCallback(() => setExpansionState(val => !val), []),
        handleSelectAllClick = useCallback(() => {
            toggleId(-1);
        }, [toggleId]);

    useUpdateEffect(async () => {
        if (isRowExpanded && groupedRows === loadingBodyData) {
            setLoadingState(true);
            const dt = await getGroupedData(titleRowData[groupBy]);
            setLoadingState(false);
            setGroupedRows(dt);
        }
    }, [isRowExpanded]);

    useUpdateEffect(() => {
        isTitleRowSelected !== areAllRowsSelected && onTitleRowSelection(id);
    }, [areAllRowsSelected]);

    useUpdateEffect(() => {
        if (isTitleRowSelected !== areAllRowsSelected) {
            isTitleRowSelected ? setSelectedIds(uniqueIds) : selectedIds.length > 0 && setSelectedIds([]);
        }
    }, [isTitleRowSelected]);

    useUpdateEffect(() => {
        // @ts-ignore
        onGroupedRowSelection(selectedIds);
    }, [selectedIds]);

    return (
        <>
            <TitleRow
                id={`${id}-title-row`}
                data={titleRowData}
                isRowSelected={!isTitleRowSelectionDisable && isTitleRowSelected}
                isRowIndeterminate={isAnyRowSelected}
                isRowExpanded={isRowExpanded}
                onRowSelection={handleSelectAllClick}
                onClick={handleExpansion}
                isRowSelectionDisabled={isLoading || isTitleRowSelectionDisable}
                showShadowAfterFrozenElement={showShadowAfterFrozenElement}
            />
            <TablePropsContext.Provider value={{ ...tableProps, columns: columns.slice(1), isLoading }}>
                <ContentRow
                    {...{
                        isRowExpanded,
                        addColumnMaxSize,
                        showShadowAfterFrozenElement,
                        data: groupedRows,
                        id: `${id}-content-row`,
                        selectedRowIds: selectedIds,
                        onRowSelection: toggleId
                    }}
                />
            </TablePropsContext.Provider>
        </>
    );
});
GroupedRow.displayName = 'GroupedRow';
