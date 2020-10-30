import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useMemo, useRef } from 'react';
import Text from '../../../Text';
import { Cell as StyledCell, CustomComponentWrapper, LoadingDiv } from './Styled';
import { TableCellProps } from './types';

const Cell: React.FC<TableCellProps> & WithStyle = React.memo(props => {
    const childRef = useRef(null),
        { addColumnMaxSize, config, data, rowId, rowData, isRowClickDisabled, dottedFieldName, tableSize, isLoading, ...restProps } = props,
        { align, hidden, frozen, formatter, component: CustomComponent } = config,
        formattedData = useMemo(() => (formatter ? formatter(data) : data), [formatter, data]);

    useEffect(() => {
        childRef.current &&
            !isLoading &&
            addColumnMaxSize &&
            addColumnMaxSize(dottedFieldName, childRef.current.clientWidth + (tableSize === 'L' ? 48 : 32));
    }, [childRef, tableSize]);

    return (
        <StyledCell hidden={hidden} frozen={frozen} tableSize={tableSize} align={align} {...restProps}>
            {isLoading ? (
                <LoadingDiv ref={childRef} />
            ) : CustomComponent ? (
                <CustomComponentWrapper ref={childRef}>
                    <CustomComponent {...{ data: formattedData, rowId, disabled: isRowClickDisabled, rowData }} />
                </CustomComponentWrapper>
            ) : (
                <Text ref={childRef} textVariant="body2" title={formattedData}>
                    {formattedData}
                </Text>
            )}
        </StyledCell>
    );
});
Cell.displayName = 'Cell';
Cell.Style = StyledCell;

export default Cell;
