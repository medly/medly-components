import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Text from '../../../Text';
import { Cell as StyledCell, CustomComponentWrapper, LoadingDiv } from './Styled';
import { TableCellProps } from './types';

const Cell: React.FC<TableCellProps> & WithStyle = React.memo(props => {
    const childRef = useRef(null),
        { addColumnMaxSize, config, data, rowId, isRowClickDisabled, dottedFieldName, tableSize, isLoading, ...restProps } = props;

    useEffect(() => {
        childRef.current && !isLoading && addColumnMaxSize(dottedFieldName, childRef.current.clientWidth + (tableSize === 'L' ? 48 : 32));
    }, [childRef.current, tableSize]);

    const formattedCell = useCallback(() => {
            switch (config.formatter) {
                case 'boolean':
                    return (
                        <Text ref={childRef} textVariant="body2">
                            {data ? 'Yes' : 'No'}
                        </Text>
                    );
                case 'react-component': {
                    const Component = config.component;
                    return (
                        <CustomComponentWrapper ref={childRef}>
                            <Component {...{ data, rowId, disabled: isRowClickDisabled }} />
                        </CustomComponentWrapper>
                    );
                }
                default:
                    return (
                        <Text ref={childRef} textVariant="body2">
                            {data}
                        </Text>
                    );
            }
        }, [data, rowId, isLoading, isRowClickDisabled]),
        textAlign = useMemo(() => config.align || (config.formatter === 'numeric' ? 'right' : 'left'), []);

    return (
        <StyledCell hidden={config.hidden} frozen={config.frozen} tableSize={tableSize} align={textAlign} {...restProps}>
            {isLoading ? <LoadingDiv ref={childRef} /> : formattedCell()}
        </StyledCell>
    );
});
Cell.displayName = 'Cell';
Cell.Style = StyledCell;

export default Cell;
