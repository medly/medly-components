import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Actions from './Actions';
import Content from './Content';
import { DialogBoxContext } from './DialogBox.context';
import { DialogBoxBackgroundStyled } from './DialogBox.styled';
import Header from './Header';
import Popup from './Popup';
import { DialogBoxStaticProps, DialogBoxProps } from './types';

export const DialogBox: FC<DialogBoxProps> & WithStyle & DialogBoxStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { open, onCloseModal, children, minWidth, shouldCloseOnOutsideClick, minHeight, ...restProps } = props,
            id = restProps.id || 'medly-dialog-box',
            isEscPressed = useKeyPress('Escape'),
            dialogBoxRef = useCombinedRefs<HTMLDivElement>(ref, React.useRef(null)),
            [shouldRender, setShouldRender] = useState(open);

        const handleBackgroundClick = useCallback(() => {
            shouldCloseOnOutsideClick && onCloseModal();
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
            open && isEscPressed && onCloseModal();
        }, [open, isEscPressed]);

        return (
            shouldRender && (
                <DialogBoxBackgroundStyled {...{ ...restProps, id, open }} onClick={handleBackgroundClick}>
                    <Popup ref={dialogBoxRef} id={`${id}-popup`} onAnimationEnd={handleAnimationEnd} {...{ minWidth, minHeight, open }}>
                        <DialogBoxContext.Provider value={{ id }}>{children}</DialogBoxContext.Provider>
                    </Popup>
                </DialogBoxBackgroundStyled>
            )
        );
    })
);

DialogBox.defaultProps = {
    open: false,
    shouldCloseOnOutsideClick: false
};
DialogBox.displayName = 'DialogBox';
DialogBox.Style = DialogBoxBackgroundStyled;
DialogBox.Header = Header;
DialogBox.Popup = Popup;
DialogBox.Header = Header;
DialogBox.Content = Content;
DialogBox.Actions = Actions;
