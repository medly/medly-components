import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useContext } from 'react';
import { PopoverContext } from '../Popover.context';
import { PopupStyled } from './styled/Popup.styled';
import { PopoverPopupProps } from './types';

export const Popup: React.FC<PopoverPopupProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const [isOpen] = useContext(PopoverContext),
            stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

        return isOpen && <PopupStyled onClick={stopPropagation} ref={ref} {...props} id={props.id || 'medly-popover-popup'} />;
    })
);
Popup.displayName = 'Popup';
Popup.Style = PopupStyled;
Popup.defaultProps = {
    bgColor: 'white',
    distance: '0px',
    placement: 'bottom',
    withArrow: false,
    fullWidth: false,
    fullHeight: false
};
