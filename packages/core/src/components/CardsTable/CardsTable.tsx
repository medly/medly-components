import React, { SFC } from 'react';
import CardTableBody from './CardTableBody';
import CardTableHeader from './CardTableHeader';
import { Props } from './types';

export const CardsTable: SFC<Props> = React.memo(props => {
    
    const { data, onSort, columns, onRowClick, rowClickDisableKey, uniqueKeyName, ...restProps } = props;   
    return (
        <>
            <CardTableHeader 
                {...{
                    onSort,
                    columns,                        
                }}
            />
            <CardTableBody 
                {...{
                    data,
                    columns,
                    onRowClick,
                    rowClickDisableKey,
                    uniqueKeyName,
                    ...restProps
                }}
            />
        </>
    );
})


CardsTable.defaultProps = {
    data: [],
    rowClickDisableKey: '',
    uniqueKeyName: 'id',
    withLightTheme: false
};

CardsTable.displayName = 'CardsTable';





