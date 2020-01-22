import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useMemo, useRef } from 'react';
import { PopoverWrapperStyled } from './PopoverWrapper.styled';
import { Props } from './types';

export const PopoverWrapper: SFC<Props> & WithStyle = React.memo(props => {
    const wrapperRef = useRef(null),
        { children, onOuterClick, showPopover, ...restProps } = props,
        id = props.id || 'medly-popover-wrapper';

    useOuterClickNotifier(() => {
        onOuterClick && onOuterClick();
    }, wrapperRef);

    const childrenCount = useMemo(() => React.Children.count(children), [children]),
        childrenArray = useMemo(() => React.Children.toArray(props.children), [children]),
        restChildren = useMemo(() => childrenArray.slice(0, childrenCount - 1), [children]),
        popover = useMemo(() => childrenArray[childrenCount - 1], [children]);

    return (
        <PopoverWrapperStyled {...restProps} ref={wrapperRef} id={id}>
            {restChildren}
            {showPopover && popover}
        </PopoverWrapperStyled>
    );
});

PopoverWrapper.displayName = 'PopoverWrapper';
PopoverWrapper.defaultProps = {
    placement: 'bottom'
};

PopoverWrapper.Style = PopoverWrapperStyled;
