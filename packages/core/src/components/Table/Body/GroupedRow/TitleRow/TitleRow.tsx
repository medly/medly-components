import { ExpandMoreIcon } from '@medly-components/icons/src';
import React, { useContext } from 'react';
import Text from '../../../../Text';
import { getGridTemplateColumns } from '../../../helpers';
import { TablePropsContext } from '../../../TableProps.context';
import RowActionsCell from '../../Cell/RowActionsCell';
import { CountChip, ExpansionCell, Row, SecondaryContent, TitleCell } from './TitleRow.styled';
import { Props } from './types';

export const TitleRow: React.FC<Props> = React.memo(props => {
    const { data, isRowExpanded, onClick, showShadowAfterFrozenElement, ...restProps } = props,
        {
            columns,
            groupBy,
            isLoading,
            isRowSelectable,
            isGroupedTable,
            isRowExpandable,
            showRowWithCardStyle,
            size: tableSize
        } = useContext(TablePropsContext);

    return (
        <Row
            {...restProps}
            onClick={onClick}
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
                    showShadowAtRight={showShadowAfterFrozenElement}
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
