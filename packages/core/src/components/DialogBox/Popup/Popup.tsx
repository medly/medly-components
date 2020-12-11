import { WithStyle } from '@medly-components/utils';
import React, { FC, Ref, useCallback } from 'react';
import * as Styled from './Popup.styled';
import { Props } from './types';

export const Popup: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref: Ref<HTMLDivElement>) => {
        const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
        return <Styled.Popup ref={ref} onClick={stopPropagation} {...props} />;
    })
);

Popup.displayName = 'Popup';
Popup.Style = Styled.Popup;
