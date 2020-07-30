import React, { useCallback, useState } from 'react';
import ContentRow from './ContentRow';
import TitleRow from './TitleRow';
import { Props } from './types';

export const GroupedRow: React.FC<Props> = React.memo(props => {
    const [isRowExpanded, setExpansionState] = useState(false),
        { id, data, selectedRowIds, onRowSelection, showShadowAfterFrozenElement } = props;

    const handleExpansion = useCallback(() => setExpansionState(val => !val), []);

    return (
        <>
            <TitleRow
                id={`${id}-title-row`}
                data={data}
                isRowExpanded={isRowExpanded}
                onRowSelection={onRowSelection}
                selectedRowIds={selectedRowIds}
                onClick={handleExpansion}
                showShadowAfterFrozenElement={showShadowAfterFrozenElement}
            />
            <ContentRow isRowExpanded={isRowExpanded} {...{ ...props, id: `${id}-content-row` }} />
        </>
    );
});
GroupedRow.displayName = 'GroupedRow';
