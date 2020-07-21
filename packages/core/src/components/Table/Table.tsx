import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import Body from './Body';
import ColumnConfiguration from './ColumnConfiguration';
import { loadingBodyData } from './constants';
import Head from './Head';
import { getUpdatedColumns } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import { TableStyled } from './Table.styled';
import { TablePropsContext } from './TableProps.context';
import { Props, StaticProps } from './types';
import useRowSelector from './useRowSelector';
import { useScrollState } from './useScrollState';

export const Table: FC<Props> & WithStyle & StaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const {
            data,
            onRowClick,
            rowIdentifier,
            rowSelectionDisableKey,
            isSelectable,
            isExpandable,
            selectedRowIds,
            onRowSelection,
            isLoading,
            ...restProps
        } = props;

        const [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
            [columns, setColumns] = useState(getUpdatedColumns(props.columns, isSelectable, isExpandable)),
            addColumnMaxSize = useCallback((field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' }), [dispatch]),
            [scrollState, handleScroll] = useScrollState();

        const isRowClickable = useMemo(() => (onRowClick ? true : false), [onRowClick]),
            isSelectAllDisable = useMemo(() => data.every(dt => dt[rowSelectionDisableKey]), [data, rowSelectionDisableKey]),
            rowSelector = useRowSelector(data, selectedRowIds, rowSelectionDisableKey, rowIdentifier, isSelectable),
            { isAnyRowSelected, isEachRowSelected, selectedIds, toggleId } = rowSelector;

        useEffect(() => {
            setColumns(getUpdatedColumns(props.columns, isSelectable, isExpandable));
        }, [props.columns, isSelectable, isExpandable]);

        useEffect(() => {
            onRowSelection && onRowSelection(selectedIds);
        }, [selectedIds, onRowSelection]);

        return (
            <TablePropsContext.Provider value={{ ...props, columns, data: isLoading ? loadingBodyData : data }}>
                <TableStyled ref={ref} {...restProps} onScroll={handleScroll} isRowClickable={isRowClickable}>
                    <Head
                        {...{
                            setColumns,
                            maxColumnSizes,
                            isEachRowSelected,
                            isAnyRowSelected,
                            onSelectAllClick: toggleId,
                            isSelectAllDisable: isSelectAllDisable,
                            showShadowAtBottom: !scrollState.isScrolledToTop,
                            showShadowAfterFrozenElement: !scrollState.isScrolledToLeft
                        }}
                    />
                    <Body
                        {...{
                            addColumnMaxSize,
                            selectedRowIds: selectedIds,
                            onRowSelection: toggleId,
                            showShadowAfterFrozenElement: !scrollState.isScrolledToLeft
                        }}
                    />
                </TableStyled>
            </TablePropsContext.Provider>
        );
    })
);

Table.defaultProps = {
    selectedRowIds: [],
    rowIdentifier: 'id',
    defaultSortOrder: 'asc',
    rowClickDisableKey: '',
    rowSelectionDisableKey: ''
};

Table.displayName = 'Table';
Table.ColumnConfiguration = ColumnConfiguration;
Table.Style = TableStyled;
