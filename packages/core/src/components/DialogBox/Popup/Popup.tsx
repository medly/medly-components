import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Ref, forwardRef, memo, useCallback } from 'react';
import * as Styled from './Popup.styled';
import { DialogBoxPopupProps } from './types';

const Component: FCC<DialogBoxPopupProps> = memo(
    forwardRef((props, ref: Ref<HTMLDivElement>) => {
        const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
        return <Styled.Popup ref={ref} onClick={stopPropagation} {...props} />;
    })
);

Component.displayName = 'Popup';
export const Popup: FCC<DialogBoxPopupProps> & WithStyle = Object.assign(Component, { Style: Styled.Popup });
