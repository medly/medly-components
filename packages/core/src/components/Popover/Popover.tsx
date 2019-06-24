import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { useRef, useState } from 'react';
import { PopoverStyled, PopoverWrapperStyled } from './Popover.styled';
import { PopoverProps, PopoverWrapperProps } from './types';

export const PopoverWrapper: React.SFC<PopoverWrapperProps> & WithStyle = props => {
    const wrapperRef = useRef(null);
    const [popoverState, setPopoverState] = useState(false);

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

    useOuterClickNotifier(() => changePopoverState(false), wrapperRef);

    return <PopoverWrapperStyled {...props} ref={wrapperRef} onClick={handleOnClick} data-testid="popover-wrapper" />;
};

PopoverWrapper.defaultProps = {
    interactionType: 'hover',
    placement: 'bottom'
};
PopoverWrapper.Style = PopoverWrapperStyled;

export const Popover: React.SFC<PopoverProps> & WithStyle = props => <PopoverStyled {...props} />;

Popover.Style = PopoverStyled;
Popover.defaultProps = {
    fullWidth: false,
    fullHeight: false
};
