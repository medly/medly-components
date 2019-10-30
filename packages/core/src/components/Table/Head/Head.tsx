import React, { useState } from 'react';
import Checkbox from '../../Checkbox';
import { GroupCell, GroupCellTitle } from '../GroupCell';
import { changeSize, getGridTemplateColumns } from '../helpers';
import Row from '../Row';
import { ColumnConfig, SortOrder } from '../types';
import HeadCell from './HeadCell';
import { Props } from './types';

const Head: React.SFC<Props> = React.memo(props => {
    const { columns, onSort, setColumns, isAllRowSelected, onSelectAllClick, maxColumnSizes } = props;

    const [sortField, setSortField] = useState('');

    const handleWidthChange = (width: number, field: string) => setColumns(changeSize(width, field, columns)),
        handleSortChange = (field: string, order: SortOrder) => {
            setSortField(field);
            onSort(field, order);
        },
        stopPropogation = (e: React.MouseEvent) => e.stopPropagation(),
        handleSelectAllClick = () => onSelectAllClick(-1);

    const headCell = (configs: ColumnConfig[] = columns, field = '') => {
        const cells: React.ReactElement[] = [];

        configs.forEach((config, index) => {
            return config.children
                ? cells.push(
                      <GroupCell key={index} hide={config.hide} gridTemplateColumns={getGridTemplateColumns(config.children)}>
                          <GroupCellTitle>{config.title}</GroupCellTitle>
                          {headCell(config.children, config.field)}
                      </GroupCell>
                  )
                : cells.push(
                      <HeadCell
                          maxColumnSizes={maxColumnSizes}
                          sortField={sortField}
                          frozen={config.frozen}
                          hide={config.hide}
                          enableSorting={config.sort}
                          key={index}
                          field={field ? `${field}.${config.field}` : config.field}
                          onSortChange={handleSortChange}
                          onWidthChange={handleWidthChange}
                      >
                          {config.field === 'medly-table-checkbox' ? (
                              <Checkbox
                                  checked={isAllRowSelected}
                                  onChange={handleSelectAllClick}
                                  onClick={stopPropogation}
                                  name="active"
                              />
                          ) : (
                              config.title
                          )}
                      </HeadCell>
                  );
        });

        return cells;
    };
    return <Row gridTemplateColumns={getGridTemplateColumns(columns)}>{headCell()}</Row>;
});

export default Head;
