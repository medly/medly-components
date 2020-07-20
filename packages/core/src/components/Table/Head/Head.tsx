import React, { useCallback, useContext, useMemo, useState } from 'react';
import Checkbox from '../../Checkbox';
import { GroupCell, GroupCellTitle } from '../GroupCell';
import { changeSize, getGridTemplateColumns } from '../helpers';
import { TablePropsContext } from '../TableProps.context';
import { SortOrder, TableColumnConfig } from '../types';
import { THead } from './Head.styled';
import HeadCell from './HeadCell';
import HeadRow from './HeadRow';
import { Props } from './types';

const Head: React.FC<Props> = React.memo(props => {
    const { columns, isLoading, onSort, defaultSortOrder, defaultSortField } = useContext(TablePropsContext),
        {
            setColumns,
            isAnyRowSelected,
            isEachRowSelected,
            isSelectAllDisable,
            onSelectAllClick,
            maxColumnSizes,
            showShadowAtBottom,
            showShadowAfterFrozenElement
        } = props;

    const [sortField, setSortField] = useState(defaultSortField);

    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleSelectAllClick = useCallback(() => onSelectAllClick(-1), [onSelectAllClick]),
        handleWidthChange = useCallback((width: number, field: string) => setColumns(cl => changeSize(width, field, cl)), []),
        handleSortChange = useCallback(
            (field: string, order: SortOrder) => {
                setSortField(field);
                onSort(field, order);
            },
            [onSort]
        );

    const selectAllCheckBox = useMemo(
            () => (
                <Checkbox
                    indeterminate={isAnyRowSelected}
                    disabled={isLoading || isSelectAllDisable}
                    checked={isEachRowSelected}
                    onChange={handleSelectAllClick}
                    onClick={stopPropagation}
                    name="active"
                />
            ),
            [isLoading, isAnyRowSelected, isEachRowSelected, isSelectAllDisable, handleSelectAllClick]
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
                            frozen={config.frozen}
                            hidden={config.hidden}
                            sortable={config.sortable}
                            defaultSortOrder={defaultSortOrder}
                            onSortChange={handleSortChange}
                            onWidthChange={handleWidthChange}
                            isRowSelectionCell={config.field === 'medly-table-checkbox'}
                            showShadowAtRight={config.field === 'medly-table-checkbox' && showShadowAfterFrozenElement}
                        >
                            {config.field === 'medly-table-checkbox' ? selectAllCheckBox : config.title}
                        </HeadCell>
                    );
                }),
            [sortField, maxColumnSizes, selectAllCheckBox, showShadowAfterFrozenElement]
        );

    return (
        <THead showShadowAtBottom={showShadowAtBottom}>
            <HeadRow gridTemplateColumns={getGridTemplateColumns(columns)}>{headCell(columns)}</HeadRow>
        </THead>
    );
});
Head.displayName = 'Head';
export default Head;
