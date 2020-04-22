import React, { SFC } from 'react';
import Body from './Body';
import Head from './Head';
import { Props } from './types';

export const CardsTable: SFC<Props> = React.memo(props => {
    
    const { data, onSort, columns, onRowClick, rowClickDisableKey, uniqueKeyName, ...restProps } = props;   
    return (
        <>
            <Head 
                {...{
                    onSort,
                    columns,                        
                }}
            />
            <Body 
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





