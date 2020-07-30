import { ExpandMoreIcon } from '@medly-components/icons/src';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Text from '../../../../Text';
import { getGridTemplateColumns } from '../../../helpers';
import { TablePropsContext } from '../../../TableProps.context';
import RowActionsCell from '../../Cell/RowActionsCell';
import { CountChip, ExpansionCell, Row, SecondaryContent, TitleCell } from './TitleRow.styled';
import { Props } from './types';

export const TitleRow: React.FC<Props> = React.memo(props => {
    const [tableWidth, setTableWidth] = useState(),
        { data, isRowExpanded, onClick, ...restProps } = props,
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
        } = useContext(TablePropsContext);

    // @ts-ignore
    const observer = useRef(new ResizeObserver(entries => setTableWidth(entries[0].contentRect.width)));

    useEffect(() => {
        if (tableRef.current) {
            observer.current.observe(tableRef.current);
            return () => observer.current && observer.current.unobserve(tableRef.current);
        }
    }, [tableRef, observer]);

    return (
        <Row
            {...restProps}
            onClick={onClick}
            tableWidth={tableWidth}
            isRowExpanded={isRowExpanded}
            showRowWithCardStyle={showRowWithCardStyle}
            gridTemplateColumns={getGridTemplateColumns(columns)}
        >
            <ExpansionCell isRowExpanded={isRowExpanded}>
                <ExpandMoreIcon size="L" />
            </ExpansionCell>
            {(isRowSelectable || isRowExpandable) && (
                <RowActionsCell
                    isRowSelectable={isRowSelectable}
                    isGroupedTable={isGroupedTable}
                    tableSize={tableSize}
                    isLoading={isLoading}
                />
            )}
            <TitleCell tableSize={tableSize} isRowSelectable={isRowSelectable} isRowExpandable={isRowExpandable}>
                <Text textVariant="body2" textWeight="Medium">
                    {data[groupBy]}
                </Text>
                <CountChip>{data.count}</CountChip>
                <SecondaryContent textVariant="body2" textWeight="Medium">
                    {data[groupBy]}
                </SecondaryContent>
            </TitleCell>
        </Row>
    );
});
TitleRow.displayName = 'TitleRow';
