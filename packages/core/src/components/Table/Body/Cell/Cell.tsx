import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Text from '../../../Text';
import { Cell as StyledCell, CustomComponentWrapper, LoadingDiv } from './Styled';
import { TableCellProps } from './types';

const Cell: React.FC<TableCellProps> & WithStyle = React.memo(props => {
    const childRef = useRef(null),
        { addColumnMaxSize, config, data, rowId, isRowClickDisabled, dottedFieldName, tableSize, isLoading, ...restProps } = props,
        { align, hidden, frozen, formatter, component: CustomComponent } = config;

    useEffect(() => {
        childRef.current && !isLoading && addColumnMaxSize(dottedFieldName, childRef.current.clientWidth + (tableSize === 'L' ? 48 : 32));
    }, [childRef.current, tableSize]);

    const formattedCell = useCallback(() => {
            if (CustomComponent) {
                return (
                    <CustomComponentWrapper ref={childRef}>
                        <CustomComponent {...{ data, rowId, disabled: isRowClickDisabled }} />
                    </CustomComponentWrapper>
                );
            }
            switch (formatter) {
                case 'boolean':
                    return (
                        <Text ref={childRef} textVariant="body2">
                            {data ? 'Yes' : 'No'}
                        </Text>
                    );
                default:
                    return (
                        <Text ref={childRef} textVariant="body2">
                            {data}
                        </Text>
                    );
            }
        }, [data, formatter, rowId, isRowClickDisabled, CustomComponent]),
        textAlign = useMemo(() => align || (formatter === 'numeric' ? 'right' : 'left'), [align, formatter]);

    return (
        <StyledCell hidden={hidden} frozen={frozen} tableSize={tableSize} align={textAlign} {...restProps}>
            {isLoading ? <LoadingDiv ref={childRef} /> : formattedCell()}
        </StyledCell>
    );
});
Cell.displayName = 'Cell';
Cell.Style = StyledCell;

export default Cell;
