import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useRef } from 'react';
import { PopoverWrapperStyled } from './PopoverWrapper.styled';
import { Props } from './types';

export const PopoverWrapper: SFC<Props> & WithStyle = React.memo(props => {
    const wrapperRef = useRef(null),
        { onOuterClick, showPopover, ...restProps } = props,
        id = props.id || 'medly-popover-wrapper';

    const changePopoverState = useCallback(
        (state: boolean) => {
            if (props.interactionType === 'click') {
                const popoverIndex = wrapperRef.current.children.length - 1,
                    popover = wrapperRef.current.children[popoverIndex] as HTMLElement;
                popover.style.display = state ? 'block' : 'none';
            }
        },
        [props.interactionType, wrapperRef.current]
    );

    useEffect(() => {
        changePopoverState(showPopover);
    }, [showPopover]);

    useOuterClickNotifier(() => {
        changePopoverState(false);
        onOuterClick && onOuterClick();
    }, wrapperRef);

    return <PopoverWrapperStyled {...restProps} ref={wrapperRef} id={id} />;
});

PopoverWrapper.displayName = 'PopoverWrapper';
PopoverWrapper.defaultProps = {
    interactionType: 'hover',
    placement: 'bottom'
};
PopoverWrapper.Style = PopoverWrapperStyled;
