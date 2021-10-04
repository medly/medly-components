import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Actions from './Actions';
import Content from './Content';
import { DialogBoxContext } from './DialogBox.context';
import { DialogBoxBackgroundStyled } from './DialogBox.styled';
import Header from './Header';
import Popup from './Popup';
import { DialogBoxProps, DialogBoxStaticProps } from './types';

const Component: FC<DialogBoxProps> = React.memo(
    React.forwardRef((props, ref) => {
        const { id, open, onCloseModal, children, minWidth, shouldCloseOnOutsideClick, minHeight, ...restProps } = props,
            isEscPressed = useKeyPress('Escape'),
            dialogBoxRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            [shouldRender, setShouldRender] = useState(open);

        const handleBackgroundClick = useCallback(() => {
            shouldCloseOnOutsideClick && onCloseModal && onCloseModal();
        }, [shouldCloseOnOutsideClick, onCloseModal]);

        useEffect(() => {
            if (open) {
                setShouldRender(true);
                document.body.style.overflow = 'hidden';
            }
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, [open]);

        const handleAnimationEnd = useCallback(() => {
            if (!open) {
                setShouldRender(false);
                document.body.style.overflow = 'unset';
            }
        }, [open]);

        useEffect(() => {
            open && isEscPressed && onCloseModal && onCloseModal();
        }, [open, isEscPressed]);

        return shouldRender ? (
            <DialogBoxBackgroundStyled {...{ ...restProps, id, open }} onClick={handleBackgroundClick}>
                <Popup ref={dialogBoxRef} id={`${id}-popup`} onAnimationEnd={handleAnimationEnd} {...{ minWidth, minHeight, open }}>
                    <DialogBoxContext.Provider value={{ id: id! }}>{children}</DialogBoxContext.Provider>
                </Popup>
            </DialogBoxBackgroundStyled>
        ) : null;
    })
);

Component.defaultProps = {
    id: 'medly-dialog-box',
    open: false,
    shouldCloseOnOutsideClick: false
};
Component.displayName = 'DialogBox';
export const DialogBox: FC<DialogBoxProps> & WithStyle & DialogBoxStaticProps = Object.assign(Component, {
    Style: DialogBoxBackgroundStyled,
    Header,
    Popup,
    Content,
    Actions
});
