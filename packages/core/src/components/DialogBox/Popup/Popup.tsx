import { WithStyle } from '@medly-components/utils';
import React, { FC, Ref, useCallback } from 'react';
import * as Styled from './Popup.styled';
import { DialogBoxPopupProps } from './types';

const Component: FC<DialogBoxPopupProps> = React.memo(
    React.forwardRef((props, ref: Ref<HTMLDivElement>) => {
        const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
        return <Styled.Popup ref={ref} onClick={stopPropagation} {...props} />;
    })
);

Component.displayName = 'Popup';
export const Popup: FC<DialogBoxPopupProps> & WithStyle = Object.assign(Component, { Style: Styled.Popup });
