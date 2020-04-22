import { ArrowDropDownIcon, ArrowDropUpIcon, DropdownIcon } from "@medly-components/icons/src";
import { WithStyle } from "@medly-components/utils/src";
import React, { SFC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Card from "../../../Card";
import Text from "../../../Text";
import { HeaderStyled } from "./Header.styled";
import { Props } from "./types";


export const Header: SFC<Props> & WithStyle = React.memo( props => {

    const { sortField, field, onSortChange, enableSorting, title } = props;

    const [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>('none');

    const cellEl = useRef(null);

    useEffect(() => {
        if (sortField !== field) setSortState('none');
    }, [sortField]);
    
    const handleSortIconClick = useCallback(() => {
        const order = sortState === 'asc' ? 'desc' : 'asc';
        setSortState(order);
        onSortChange(field, order);
    }, [sortState, onSortChange, field]);

    const sortIcon = useMemo(() =>
            sortField !== field ? (
                <DropdownIcon size="XS" onClick={handleSortIconClick} />
            ) : sortState === 'desc' ? (
                <ArrowDropDownIcon size="M" onClick={handleSortIconClick} />
            ) : (
                <ArrowDropUpIcon size="M" onClick={handleSortIconClick} />
            ),
        [handleSortIconClick, sortField, field, sortState]
    );
    
    return (
        <HeaderStyled 
            ref={cellEl} 
            flowDirection="horizontal" 
            variant="flat"
            fullWidth 
            withPadding={false}
            title={title}
        >
            <Card key={field} variant="flat" alignItems="left">
                <Text>
                    {title}
                    {enableSorting && sortIcon}
                </Text>
            </Card>

        </HeaderStyled>
    )
 


});
Header.displayName = 'Header';
Header.Style = HeaderStyled;

