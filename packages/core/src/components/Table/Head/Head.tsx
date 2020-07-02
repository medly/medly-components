import React, { useCallback, useMemo, useState } from 'react';
import Checkbox from '../../Checkbox';
import { GroupCell, GroupCellTitle } from '../GroupCell';
import { changeSize, getGridTemplateColumns } from '../helpers';
import { ColumnConfig, SortOrder } from '../types';
import { THead } from './Head.styled';
import HeadCell from './HeadCell';
import HeadRow from './HeadRow';
import { Props } from './types';

const Head: React.FC<Props> = React.memo(props => {
    const {
        columns,
        onSort,
        setColumns,
        isAnyRowSelected,
        isEachRowSelected,
        isSelectAllDisable,
        onSelectAllClick,
        maxColumnSizes,
        defaultSortOrder,
        defaultSortField
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
                    disabled={isSelectAllDisable}
                    checked={isEachRowSelected}
                    onChange={handleSelectAllClick}
                    onClick={stopPropagation}
                    name="active"
                />
            ),
            [isAnyRowSelected, isEachRowSelected, isSelectAllDisable, handleSelectAllClick]
        ),
        headCell = useCallback(
            (configs: ColumnConfig[], field = '') =>
                configs.map(config => {
                    const fieldName = field ? `${field}.${config.field}` : config.field;
                    return config.children ? (
                        <GroupCell
                            showBorders
                            as={field ? 'div' : 'th'}
                            key={config.field}
                            hidden={config.hidden}
                            gridTemplateColumns={getGridTemplateColumns(config.children)}
                        >
                            <GroupCellTitle textVariant="h5" textWeight="Strong">
                                {config.title}
                            </GroupCellTitle>
                            {headCell(config.children, fieldName)}
                        </GroupCell>
                    ) : (
                        <HeadCell
                            as={field ? 'div' : 'th'}
                            key={fieldName}
                            field={fieldName}
                            fitContent={config.fitContent}
                            columnMaxSize={maxColumnSizes[fieldName]}
                            sortField={sortField}
                            frozen={config.frozen}
                            hidden={config.hidden}
                            sortable={config.sortable}
                            defaultSortOrder={defaultSortOrder}
                            onSortChange={handleSortChange}
                            onWidthChange={handleWidthChange}
                        >
                            {config.field === 'medly-table-checkbox' ? selectAllCheckBox : config.title}
                        </HeadCell>
                    );
                }),
            [sortField, maxColumnSizes, selectAllCheckBox]
        );

    return (
        <THead>
            <HeadRow gridTemplateColumns={getGridTemplateColumns(columns)}>{headCell(columns)}</HeadRow>
        </THead>
    );
});
Head.displayName = 'Head';
export default Head;
