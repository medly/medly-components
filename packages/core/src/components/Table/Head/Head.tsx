import React, { useCallback, useMemo, useState } from 'react';
import Checkbox from '../../Checkbox';
import { GroupCell, GroupCellTitle } from '../GroupCell';
import { changeSize, getGridTemplateColumns } from '../helpers';
import Row from '../Row';
import { ColumnConfig, SortOrder } from '../types';
import HeadCell from './HeadCell';
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
                configs.map((config, index) => {
                    const fieldName = field ? `${field}.${config.field}` : config.field;
                    return config.children ? (
                        <GroupCell showBorders key={index} hide={config.hide} gridTemplateColumns={getGridTemplateColumns(config.children)}>
                            <GroupCellTitle textVariant="h5" textWeight="Strong">
                                {config.title}
                            </GroupCellTitle>
                            {headCell(config.children, fieldName)}
                        </GroupCell>
                    ) : (
                        <HeadCell
                            fitContent={config.fitContent}
                            columnMaxSize={maxColumnSizes[fieldName]}
                            sortField={sortField}
                            frozen={config.frozen}
                            hide={config.hide}
                            sortable={config.sortable}
                            key={index}
                            field={fieldName}
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

    return <Row gridTemplateColumns={getGridTemplateColumns(columns)}>{headCell(columns)}</Row>;
});
Head.displayName = 'Head';
export default Head;
