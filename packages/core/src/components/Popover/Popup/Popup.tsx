import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useContext } from 'react';
import { PopoverContext } from '../Popover.context';
import { PopupStyled } from './styled/Popup.styled';
import { PopoverPopupProps } from './types';

const Component: React.FC<PopoverPopupProps> = React.memo(
    React.forwardRef((props, ref) => {
        const [isOpen] = useContext(PopoverContext),
            stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

        return isOpen ? <PopupStyled ref={ref} onClick={stopPropagation} placement={props.placement!} {...props} /> : null;
    })
);
Component.displayName = 'Popup';
Component.defaultProps = {
    id: 'medly-popover-popup',
    bgColor: 'white',
    distance: '0px',
    placement: 'bottom',
    withArrow: false,
    fullWidth: false,
    fullHeight: false
};
export const Popup: React.FC<PopoverPopupProps> & WithStyle = Object.assign(Component, { Style: PopupStyled });
