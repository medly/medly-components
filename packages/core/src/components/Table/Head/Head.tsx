import React, { useCallback, useContext, useMemo } from 'react';
import Checkbox from '../../Checkbox';
import { TableComponentsCommonPropsContext, TableStateContext } from '../context';
import { GroupCell, GroupCellTitle } from '../GroupCell';
import { changeSize, getGridTemplateColumns } from '../helpers';
import { SortOrder, TableColumnConfig } from '../types';
import { THead } from './Head.styled';
import HeadCell from './HeadCell';
import HeadRow from './HeadRow';
import { TableHeadProps } from './types';

const Head: React.FC<TableHeadProps> = React.memo(props => {
    const {
            columns,
            isLoading,
            isRowExpandable,
            isRowSelectable,
            onSort,
            defaultSortOrder,
            size: tableSize,
            isGroupedTable,
            hiddenDivRef,
            addColumnMaxSize,
            showRowWithCardStyle
        } = useContext(TableComponentsCommonPropsContext),
        {
            setColumns,
            isAnyRowSelected,
            areAllRowsSelected,
            isSelectAllDisable,
            onSelectAllClick,
            maxColumnSizes,
            showShadowAtBottom,
            showShadowAfterFrozenElement
        } = props;

    const [{ sortField }, setTableState] = useContext(TableStateContext);

    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleSelectAllClick = useCallback(() => onSelectAllClick(-1), [onSelectAllClick]),
        handleWidthChange = useCallback((width: number, field: string) => setColumns(cl => changeSize(width, field, cl)), []),
        handleSortChange = useCallback(
            (field: string, order: SortOrder) => {
                setTableState(val => {
                    const newState = { ...val, sortField: field, sortOrder: order };
                    onSort(newState);
                    return newState;
                });
            },
            [onSort]
        );

    const selectAllCheckBox = useMemo(
            () => (
                <Checkbox
                    size={tableSize === 'XS' ? tableSize : null}
                    indeterminate={isAnyRowSelected}
                    disabled={isLoading || isSelectAllDisable}
                    checked={areAllRowsSelected}
                    onChange={handleSelectAllClick}
                    onClick={stopPropagation}
                    name="active"
                />
            ),
            [isLoading, isAnyRowSelected, areAllRowsSelected, isSelectAllDisable, tableSize, handleSelectAllClick]
        ),
        headCell = useCallback(
            (configs: TableColumnConfig[], field = '') =>
                configs.map(config => {
                    const fieldName = field ? `${field}.${config.field}` : config.field;
                    return config.children ? (
                        <GroupCell
                            as={field ? 'div' : 'th'}
                            key={config.field}
                            hidden={config.hidden}
                            gridTemplateColumns={getGridTemplateColumns(config.children)}
                            isTitleCell
                            tableSize={tableSize}
                        >
                            <GroupCellTitle textVariant="h5" textWeight="Strong" uppercase>
                                {config.title}
                            </GroupCellTitle>
                            {headCell(config.children, fieldName)}
                        </GroupCell>
                    ) : (
                        <HeadCell
                            as={field ? 'div' : 'th'}
                            key={fieldName}
                            field={fieldName}
                            isLoading={isLoading}
                            fitContent={config.fitContent}
                            columnMaxSize={maxColumnSizes[fieldName]}
                            sortField={sortField}
                            align={config.align}
                            frozen={config.frozen}
                            hidden={config.hidden}
                            sortable={config.sortable}
                            defaultSortOrder={defaultSortOrder}
                            onSortChange={handleSortChange}
                            onWidthChange={handleWidthChange}
                            isRowExpandable={isRowExpandable}
                            tableSize={tableSize}
                            isGroupedTable={isGroupedTable}
                            hiddenDivRef={hiddenDivRef}
                            addColumnMaxSize={addColumnMaxSize}
                            isRowActionCell={config.field === 'row-actions'}
                            showShadowAtRight={config.field === 'row-actions' && showShadowAfterFrozenElement}
                        >
                            {config.field === 'row-actions' && isRowSelectable ? selectAllCheckBox : config.title}
                        </HeadCell>
                    );
                }),
            [
                tableSize,
                isRowExpandable,
                isRowSelectable,
                sortField,
                addColumnMaxSize,
                maxColumnSizes,
                selectAllCheckBox,
                showShadowAfterFrozenElement
            ]
        );

    return (
        <THead showShadowAtBottom={showShadowAtBottom}>
            <HeadRow gridTemplateColumns={getGridTemplateColumns(columns)} showRowWithCardStyle={showRowWithCardStyle}>
                {headCell(columns)}
            </HeadRow>
        </THead>
    );
});
Head.displayName = 'Head';
export default Head;
