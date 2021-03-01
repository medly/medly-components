import React, { useContext, useMemo } from 'react';
import { TableComponentsCommonPropsContext } from '../context';
import { getGridTemplateColumns } from '../helpers';
import Minimap from '../Minimap';
import { TBody } from './Body.styled';
import GroupedRow from './GroupedRow';
import Row from './Row';
import { NoResultCell, NoResultRow } from './Row/Row.styled';
import { Props } from './types';

const Body: React.FC<Props> = React.memo(props => {
    const { data, groupBy, rowIdentifier, showRowWithCardStyle, noResultRow, tableRef, withMinimap, columns, size } = useContext(
            TableComponentsCommonPropsContext
        ),
        { selectedRowIds, onRowSelection, onGroupedRowSelection, setUniqueIds, ...restProps } = props,
        /* since minimap is positioned sticky with respect to the tbody, tbody should have full table width otherwise minimap positioning fails */
        tableVisibleWidth = tableRef.current?.clientWidth ?? 0,
        minimapDimensionDeps = useMemo(() => [columns], [columns]);

    return (
        <TBody>
            {data.length === 0 &&
                (noResultRow ? (
                    noResultRow
                ) : (
                    <NoResultRow
                        showRowWithCardStyle={showRowWithCardStyle}
                        gridTemplateColumns={getGridTemplateColumns(columns)}
                        withMinimap={withMinimap}
                    >
                        <NoResultCell width={tableVisibleWidth} tableSize={size}>
                            No result
                        </NoResultCell>
                    </NoResultRow>
                ))}
            {data.map((row, index) => {
                const identifier = (groupBy ? row[groupBy] : row[rowIdentifier]) || index;
                return groupBy ? (
                    <GroupedRow
                        id={identifier}
                        key={identifier}
                        titleRowData={row}
                        setUniqueIds={setUniqueIds}
                        selectedTitleRowIds={selectedRowIds}
                        onTitleRowSelection={onRowSelection}
                        {...{ ...restProps, onGroupedRowSelection }}
                    />
                ) : (
                    <Row id={identifier} key={identifier} data={row} {...{ ...restProps, selectedRowIds, onRowSelection }} />
                );
            })}
            {withMinimap && <Minimap tableRef={tableRef} minimapDimensionDeps={minimapDimensionDeps} />}
        </TBody>
    );
});
Body.displayName = 'Body';
export default Body;
