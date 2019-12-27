import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useRef, useState } from 'react';
import { PopoverStyled, PopoverWrapperStyled } from './Popover.styled';
import { PopoverProps, PopoverWrapperProps } from './types';

export const PopoverWrapper: SFC<PopoverWrapperProps> & WithStyle = React.memo(props => {
    const { onOuterClick, ...restProps } = props;

    const wrapperRef = useRef(null),
        [popoverState, setPopoverState] = useState(false);

    const changePopoverState = useCallback(
        (state: boolean) => {
            if (props.interactionType === 'click') {
                const length = wrapperRef.current.children.length - 1;
                const popover = wrapperRef.current.children[length] as HTMLElement;
                popover.style.display = state ? 'block' : 'none';
                setPopoverState(state);
            }
        },
        [props.interactionType, wrapperRef.current]
    );

    const handleOnClick = useCallback(() => {
        changePopoverState(!popoverState);
    }, [popoverState, changePopoverState]);

    useOuterClickNotifier(() => {
        changePopoverState(false);
        onOuterClick && onOuterClick();
    }, wrapperRef);

    return <PopoverWrapperStyled {...restProps} ref={wrapperRef} onClick={handleOnClick} data-testid="popover-wrapper" />;
});

PopoverWrapper.displayName = 'PopoverWrapper';
PopoverWrapper.defaultProps = {
    interactionType: 'hover',
    placement: 'bottom'
};
PopoverWrapper.Style = PopoverWrapperStyled;

export const Popover: SFC<PopoverProps> & WithStyle = React.memo(React.forwardRef((props, ref) => <PopoverStyled ref={ref} {...props} />));
Popover.displayName = 'Popover';
Popover.Style = PopoverStyled;
Popover.defaultProps = {
    fullWidth: false,
    fullHeight: false
};
