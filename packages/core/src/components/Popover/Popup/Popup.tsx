import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { forwardRef, memo, useCallback, useContext } from 'react';
import { PopoverContext } from '../Popover.context';
import { PopupStyled } from './styled/Popup.styled';
import { PopoverPopupProps } from './types';

const Component: FCC<PopoverPopupProps> = memo(
    forwardRef((props, ref) => {
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
export const Popup: FCC<PopoverPopupProps> & WithStyle = Object.assign(Component, { Style: PopupStyled });
