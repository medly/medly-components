import { ExpandMoreIcon } from '@medly-components/icons';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Text from '../../../../Text';
import { TableComponentsCommonPropsContext } from '../../../context';
import { getGridTemplateColumns } from '../../../helpers';
import RowActionsCell from '../../Cell/RowActionsCell';
import { LoadingDiv } from '../../Cell/Styled';
import { CountChip, ExpansionCell, Row, SecondaryContent, TitleCell } from './TitleRow.styled';
import { TitleRowProps } from './types';

export const TitleRow: React.FC<TitleRowProps> = React.memo(props => {
    const [tableWidth, setTableWidth] = useState(),
        { data, isRowExpanded, onClick, onRowSelection, isRowIndeterminate, ...restProps } = props,
        {
            tableRef,
            columns,
            groupBy,
            isLoading,
            isRowSelectable,
            isGroupedTable,
            isRowExpandable,
            showRowWithCardStyle,
            size: tableSize
        } = useContext(TableComponentsCommonPropsContext);

    // @ts-ignore
    const observer = useRef(new ResizeObserver(entries => setTableWidth(entries[0].contentRect.width)));

    useEffect(() => {
        if (tableRef.current) {
            observer.current.observe(tableRef.current);
            // @ts-ignore
            return observer.disconnect;
        }
    }, []);

    return (
        <Row
            {...restProps}
            onClick={isLoading ? undefined : onClick}
            tableWidth={tableWidth}
            isLoading={isLoading}
            tableSize={tableSize}
            isRowExpanded={isRowExpanded}
            isRowSelectable={isRowSelectable}
            isRowExpandable={isRowExpandable}
            showRowWithCardStyle={showRowWithCardStyle}
            gridTemplateColumns={getGridTemplateColumns(columns)}
        >
            <ExpansionCell isRowExpanded={isRowExpanded} showPadding={isLoading} tableSize={tableSize}>
                {isLoading ? <LoadingDiv /> : <ExpandMoreIcon size={tableSize === 'L' ? 'M' : 'S'} />}
            </ExpansionCell>
            {(isRowSelectable || isRowExpandable) && (
                <RowActionsCell
                    isRowSelected={restProps.isRowSelected}
                    isRowSelectable={isRowSelectable}
                    isGroupedTable={isGroupedTable}
                    tableSize={tableSize}
                    isLoading={isLoading}
                    isRowIndeterminate={isRowIndeterminate}
                    onRowSelection={onRowSelection}
                    isRowSelectionDisabled={props.isRowSelectionDisabled}
                />
            )}
            <TitleCell tableSize={tableSize} isRowSelectable={isRowSelectable} isRowExpandable={isRowExpandable}>
                {isLoading ? (
                    <LoadingDiv />
                ) : (
                    <>
                        <Text textVariant="body2" textWeight="Medium">
                            {groupBy ? data[groupBy] : ''}
                        </Text>
                        <CountChip>{data.count}</CountChip>
                        <SecondaryContent textVariant="body2" textWeight="Medium">
                            {data.secondaryContent}
                        </SecondaryContent>
                    </>
                )}
            </TitleCell>
        </Row>
    );
});
TitleRow.displayName = 'TitleRow';
