import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useContext, useRef } from 'react';
import CloseModalContext from '../CloseModalContext';
import * as Styled from './ModalPopup.styled';

export const ModalPopup: SFC & WithStyle = props => {
    const innerRef = useRef(null),
        handleClose = useContext(CloseModalContext);

    useOuterClickNotifier(handleClose, innerRef);

    return <Styled.Popup ref={innerRef}>{props.children}</Styled.Popup>;
};

ModalPopup.displayName = 'ModalPopup';
ModalPopup.Style = Styled.Popup;
