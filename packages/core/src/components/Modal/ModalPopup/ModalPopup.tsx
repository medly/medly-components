import { WithStyle } from '@medly-components/utils';
import React, { Ref, SFC, useCallback } from 'react';
import * as Styled from './ModalPopup.styled';
import { Props } from './types';

export const ModalPopup: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref: Ref<HTMLDivElement>) => {
        const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
        return <Styled.Popup ref={ref} onClick={stopPropagation} {...props} />;
    })
);

ModalPopup.displayName = 'ModalPopup';
ModalPopup.Style = Styled.Popup;
