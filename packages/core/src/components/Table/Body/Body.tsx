import { useKeyPress } from '@medly-components/utils';
import { FC, memo, useContext, useEffect, useMemo, useState } from 'react';
import { TableComponentsCommonPropsContext } from '../context';
import { getGridTemplateColumns } from '../helpers';
import Minimap from '../Minimap';
import { TBody } from './Body.styled';
import GroupedRow from './GroupedRow';
import Row from './Row';
import { NoResultCell, NoResultRow } from './Row/Row.styled';
import { TableBodyProps } from './types';

const Body: FC<TableBodyProps> = memo(props => {
    const { data, groupBy, rowIdentifier, showRowWithCardStyle, noResultRow, tableRef, withMinimap, columns, size, keyBindings } =
            useContext(TableComponentsCommonPropsContext),
        { selectedRowIds, onRowSelection, onGroupedRowSelection, setUniqueIds, ...restProps } = props,
        [cursor, setCursor] = useState(-1),
        /* since minimap is positioned sticky with respect to the tbody, tbody should have full table width otherwise minimap positioning fails */
        tableVisibleWidth = tableRef.current?.clientWidth ?? 0,
        minimapDimensionDeps = useMemo(() => [columns], [columns]),
        isUpKeyPressed = useKeyPress(keyBindings.up!),
        isDownKeyPressed = useKeyPress(keyBindings.down!),
        isSelectionKeyPressed = useKeyPress(keyBindings.selectRow!),
        isExpansionKeyPressed = useKeyPress(keyBindings.expandRow!),
        isCollapseKeyPressed = useKeyPress(keyBindings.collapseRow!);

    useEffect(() => {
        if (data.length && isUpKeyPressed) {
            setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
        }
    }, [isUpKeyPressed, data]);

    useEffect(() => {
        if (data.length && isDownKeyPressed) {
            setCursor(prevState => (prevState < data.length - 1 ? prevState + 1 : prevState));
        }
    }, [isDownKeyPressed, data]);

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
                    <Row
                        id={identifier}
                        key={identifier}
                        data={row}
                        selectedRowIds={selectedRowIds}
                        onRowSelection={onRowSelection}
                        isNavigated={index === cursor}
                        isRowSelectedFromKeyboard={isSelectionKeyPressed && index === cursor}
                        isRowExpandedFromKeyboard={isExpansionKeyPressed && index === cursor}
                        isRowCollapsedFromKeyboard={isCollapseKeyPressed && index === cursor}
                        {...restProps}
                    />
                );
            })}
            {withMinimap && <Minimap tableRef={tableRef} minimapDimensionDeps={minimapDimensionDeps} />}
        </TBody>
    );
});
Body.displayName = 'Body';
export default Body;
