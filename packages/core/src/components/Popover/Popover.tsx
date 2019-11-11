import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useRef, useState } from 'react';
import { PopoverStyled, PopoverWrapperStyled } from './Popover.styled';
import { PopoverProps, PopoverWrapperProps } from './types';

export const PopoverWrapper: SFC<PopoverWrapperProps> & WithStyle = props => {
    const wrapperRef = useRef(null);
    const [popoverState, setPopoverState] = useState(false);
    const { onOuterClick, ...restProps } = props;

    const changePopoverState = (state: boolean) => {
        if (props.interactionType === 'click') {
            const length = wrapperRef.current.children.length - 1;
            const popover = wrapperRef.current.children[length] as HTMLElement;
            popover.style.display = state ? 'block' : 'none';
            setPopoverState(state);
        }
    };

    const handleOnClick = () => {
        changePopoverState(!popoverState);
    };

    useOuterClickNotifier(() => {
        changePopoverState(false);
        onOuterClick && onOuterClick();
    }, wrapperRef);

    return <PopoverWrapperStyled {...restProps} ref={wrapperRef} onClick={handleOnClick} data-testid="popover-wrapper" />;
};

PopoverWrapper.defaultProps = {
    interactionType: 'hover',
    placement: 'bottom'
};
PopoverWrapper.Style = PopoverWrapperStyled;

export const Popover: SFC<PopoverProps> & WithStyle = React.forwardRef((props, ref) => <PopoverStyled ref={ref} {...props} />);

Popover.Style = PopoverStyled;
Popover.defaultProps = {
    fullWidth: false,
    fullHeight: false
};
