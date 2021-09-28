import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useRef, useState } from 'react';
import { PopoverContext } from './Popover.context';
import { Wrapper } from './Popover.styled';
import Popup from './Popup';
import { PopoverProps, StaticProps } from './types';

const Component: FC<PopoverProps> = React.memo(({ id, interactionType, ...restProps }) => {
    const openState = useState(false),
        [, setOpenState] = openState,
        wrapperRef = useRef(null),
        wrapperId = id || 'medly-popover-wrapper';

    const handleMouseOver = useCallback(() => interactionType === 'hover' && setOpenState(true), [interactionType]),
        handleMouseLeave = useCallback(() => interactionType === 'hover' && setOpenState(false), [interactionType]),
        handleMouseClick = useCallback(() => interactionType === 'click' && setOpenState(val => !val), [interactionType]);

    useOuterClickNotifier(() => interactionType === 'click' && setOpenState(false), wrapperRef);

    return (
        <PopoverContext.Provider value={openState}>
            <Wrapper
                {...restProps}
                ref={wrapperRef}
                id={wrapperId}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseClick}
            />
        </PopoverContext.Provider>
    );
});

Component.displayName = 'Popover';
Component.defaultProps = {
    interactionType: 'hover'
};
export const Popover: FC<PopoverProps> & WithStyle & StaticProps = Object.assign(Component, {
    STyle: Wrapper,
    Popup,
    Context: PopoverContext
});
