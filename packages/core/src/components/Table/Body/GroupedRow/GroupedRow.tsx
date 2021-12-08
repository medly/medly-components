import { useUpdateEffect } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { loadingBodyData } from '../../constants';
import { TableComponentsCommonPropsContext } from '../../context';
import { Data } from '../../types';
import useRowSelector from '../../useRowSelector';
import ContentRow from './ContentRow';
import TitleRow from './TitleRow';
import { GroupedRowProps } from './types';

export const GroupedRow: FC<GroupedRowProps> = memo(props => {
    const tableProps = useContext(TableComponentsCommonPropsContext),
        {
            columns,
            groupBy,
            rowIdentifier,
            getGroupedData,
            rowSelectionDisableKey,
            addColumnMaxSize,
            defaultExpandedRowIdentifier,
            isLoading: isTableLoading
        } = tableProps,
        {
            id,
            setUniqueIds,
            titleRowData,
            selectedTitleRowIds,
            onTitleRowSelection,
            showShadowAfterFrozenElement,
            onGroupedRowSelection,
            setSelectAllDisableState,
            isNavigated,
            isRowCollapsedFromKeyboard,
            isRowExpandedFromKeyboard,
            isRowSelectedFromKeyboard
        } = props;

    const [isRowExpanded, setExpansionState] = useState(titleRowData[rowIdentifier] === defaultExpandedRowIdentifier),
        [isLoading, setLoadingState] = useState(true),
        [selectedIds, setSelectedIds] = useState<(string | number)[]>([]),
        [groupedRows, setGroupedRows] = useState<Data>(loadingBodyData);

    const isTitleRowSelected = useMemo(() => !isLoading && selectedTitleRowIds.includes(id), [id, isLoading, selectedTitleRowIds]),
        isTitleRowSelectionDisable = useMemo(() => {
            const isDisabled = groupedRows.every(dt => rowSelectionDisableKey && dt[rowSelectionDisableKey]);
            !isDisabled && setSelectAllDisableState(false);
            return isDisabled;
        }, [groupedRows, rowSelectionDisableKey]),
        rowSelector = useRowSelector({
            data: groupedRows,
            rowSelectionDisableKey,
            rowIdentifier,
            selectedIds,
            setSelectedIds
        }),
        { uniqueIds, isAnyRowSelected, areAllRowsSelected, toggleId } = rowSelector;

    const handleExpansion = useCallback(() => setExpansionState(val => !val), []),
        handleSelectAllClick = useCallback(() => {
            toggleId(-1);
            selectedIds.length > 0 ? onGroupedRowSelection(selectedIds) : onGroupedRowSelection(uniqueIds);
        }, [toggleId]),
        handleContentRowSelection = (rowId: number | string) => {
            onGroupedRowSelection([rowId]);
            toggleId(rowId);
        };

    useEffect(() => {
        const fetchData = async () => {
            if (groupBy && getGroupedData) {
                setLoadingState(true);
                const dt = await getGroupedData(titleRowData[groupBy]);
                setLoadingState(false);
                setGroupedRows(dt);
                setUniqueIds(array => Array.from(new Set(array.concat(titleRowData[groupBy]))));
            }
        };
        isRowExpanded && groupedRows === loadingBodyData && fetchData();
    }, [isRowExpanded]);

    useUpdateEffect(() => {
        if (isTitleRowSelected !== areAllRowsSelected) {
            onTitleRowSelection(id);
        }
    }, [areAllRowsSelected]);

    useUpdateEffect(() => {
        if (isTitleRowSelected !== areAllRowsSelected) {
            if (isTitleRowSelected) {
                setSelectedIds(uniqueIds);
                onGroupedRowSelection(uniqueIds.filter(i => !selectedIds.includes(i)));
            } else if (selectedIds.length > 0) {
                setSelectedIds([]);
                onGroupedRowSelection(selectedIds);
            }
        }
    }, [isTitleRowSelected]);

    useEffect(() => {
        if (isRowSelectedFromKeyboard && !isTitleRowSelectionDisable) handleSelectAllClick();
    }, [isRowSelectedFromKeyboard, isTitleRowSelectionDisable, handleSelectAllClick]);

    useEffect(() => {
        isRowExpandedFromKeyboard && setExpansionState(true);
    }, [isRowExpandedFromKeyboard]);

    useEffect(() => {
        isRowCollapsedFromKeyboard && setExpansionState(false);
    }, [isRowCollapsedFromKeyboard]);

    return (
        <>
            <TitleRow
                id={`${id}-title-row`}
                data={titleRowData}
                isRowSelected={!isTitleRowSelectionDisable && isTitleRowSelected}
                isRowIndeterminate={isAnyRowSelected}
                isRowExpanded={!isTableLoading && isRowExpanded}
                onRowSelection={handleSelectAllClick}
                onClick={handleExpansion}
                isRowSelectionDisabled={isLoading || isTitleRowSelectionDisable}
                showShadowAfterFrozenElement={showShadowAfterFrozenElement}
                isNavigated={isNavigated}
            />
            <TableComponentsCommonPropsContext.Provider value={{ ...tableProps, columns: columns.slice(1), isLoading }}>
                <ContentRow
                    {...{
                        addColumnMaxSize,
                        showShadowAfterFrozenElement,
                        data: groupedRows,
                        id: `${id}-content-row`,
                        selectedRowIds: selectedIds,
                        onRowSelection: handleContentRowSelection,
                        isRowExpanded: !isTableLoading && isRowExpanded
                    }}
                />
            </TableComponentsCommonPropsContext.Provider>
        </>
    );
});
GroupedRow.displayName = 'GroupedRow';
