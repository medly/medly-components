import React, { useContext } from 'react';
import Text from '../../../../Text';
import { getGridTemplateColumns } from '../../../helpers';
import { TablePropsContext } from '../../../TableProps.context';
import RowActionsCell from '../../Cell/RowActionsCell';
import { CountChip, Row, SecondaryContent, TitleCell } from './TitleRow.styled';
import { Props } from './types';

export const TitleRow: React.FC<Props> = React.memo(props => {
    const { data, isRowExpanded, onClick, ...restProps } = props,
        { columns, groupBy, isLoading, isRowSelectable, isRowExpandable, showRowWithCardStyle, size: tableSize } = useContext(
            TablePropsContext
        );

    return (
        <Row
            {...restProps}
            onClick={onClick}
            showRowWithCardStyle={showRowWithCardStyle}
            gridTemplateColumns={getGridTemplateColumns(columns)}
        >
            <RowActionsCell
                isRowExpandable
                tableSize={tableSize}
                isLoading={isLoading}
                isRowExpanded={isRowExpanded}
                onRowExpansionIconClick={onClick}
            />
            {(isRowSelectable || isRowExpandable) && (
                <RowActionsCell isRowSelectable={isRowSelectable} tableSize={tableSize} isLoading={isLoading} />
            )}
            <TitleCell tableSize={tableSize}>
                <Text textVariant="body2" textWeight="Medium">
                    {data[groupBy]}
                </Text>
                <CountChip>{data.count}</CountChip>
                <SecondaryContent textVariant="body2" textWeight="Medium">
                    {data.secondaryContent}
                </SecondaryContent>
            </TitleCell>
        </Row>
    );
});
TitleRow.displayName = 'TitleRow';
