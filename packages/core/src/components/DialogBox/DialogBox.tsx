import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react';
import CloseIcon from '../Modal/CloseIcon';
import Content from './Content';
import { DialogBoxContext } from './DialogBox.context';
import { DialogBoxBackgroundStyled } from './DialogBox.styled';
import Footer from './Footer';
import Header from './Header';
import Popup from './Popup';
import { DialogBoxProps, DialogBoxStaticProps } from './types';

const Component: FC<DialogBoxProps> = memo(
    forwardRef((props, ref) => {
        const { id, open, onClose, children, minWidth, shouldCloseOnOutsideClick, minHeight, showCloseIcon = false, ...restProps } = props,
            isEscPressed = useKeyPress('Escape'),
            dialogBoxRef = useCombinedRefs<HTMLDivElement>(ref, useRef(null)),
            [shouldRender, setShouldRender] = useState(open);

        const handleBackgroundClick = useCallback(() => {
            shouldCloseOnOutsideClick && onClose && onClose();
        }, [shouldCloseOnOutsideClick, onClose]);

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
            open && isEscPressed && onClose && onClose();
        }, [open, isEscPressed]);

        const handleCloseModal = useCallback(() => {
            onClose && onClose();
        }, [onClose]);

        return shouldRender ? (
            <DialogBoxBackgroundStyled {...{ ...restProps, id, open }} onClick={handleBackgroundClick}>
                <Popup ref={dialogBoxRef} id={`${id}-popup`} onAnimationEnd={handleAnimationEnd} {...{ minWidth, minHeight, open }}>
                    {showCloseIcon && (
                        <CloseIcon
                            id={`${id}-close-button`}
                            title={`${id}-close-icon`}
                            size="M"
                            variant="solid"
                            data-testid={`${id}-close-button`}
                            onClick={handleCloseModal}
                        />
                    )}
                    <DialogBoxContext.Provider value={{ id: id! }}>{children}</DialogBoxContext.Provider>
                </Popup>
            </DialogBoxBackgroundStyled>
        ) : null;
    })
);

Component.defaultProps = {
    id: 'medly-dialog-box',
    open: false,
    shouldCloseOnOutsideClick: false,
    showCloseIcon: false
};
Component.displayName = 'DialogBox';
export const DialogBox: FC<DialogBoxProps> & WithStyle & DialogBoxStaticProps = Object.assign(Component, {
    Style: DialogBoxBackgroundStyled,
    Header,
    Popup,
    Content,
    Footer
});
