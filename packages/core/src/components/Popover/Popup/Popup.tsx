import { WithStyle, useCombinedRefs } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo, useCallback, useContext, useEffect, useRef } from 'react';
import { PopoverContext } from '../Popover.context';
import { PopupStyled } from './styled/Popup.styled';
import { PopoverPopupProps } from './types';

const Component: FC<PopoverPopupProps> = memo(
    forwardRef((props, ref) => {
        const popupRef = useCombinedRefs<HTMLDivElement>(ref, useRef(null)),
            [isOpen] = useContext(PopoverContext),
            stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

        useEffect(() => {
            // @ts-ignore
            isOpen && popupRef.current?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
        }, [isOpen]);

        return isOpen ? <PopupStyled ref={popupRef} onClick={stopPropagation} placement={props.placement!} {...props} /> : null;
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
export const Popup: FC<PopoverPopupProps> & WithStyle = Object.assign(Component, { Style: PopupStyled });
