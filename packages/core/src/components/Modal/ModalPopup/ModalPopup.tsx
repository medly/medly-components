import { useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useContext, useRef } from 'react';
import CloseModalContext from '../CloseModalContext';
import * as Styled from './ModalPopup.styled';
import { Props } from './types';

export const ModalPopup: SFC<Props> & WithStyle = React.memo(props => {
    const innerRef = useRef(null),
        handleClose = useContext(CloseModalContext);

    useOuterClickNotifier(handleClose, innerRef);

    return <Styled.Popup ref={innerRef} {...props} />;
});

ModalPopup.displayName = 'ModalPopup';
ModalPopup.Style = Styled.Popup;
