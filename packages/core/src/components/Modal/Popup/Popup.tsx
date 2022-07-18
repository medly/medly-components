import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo, Ref, useCallback } from 'react';
import * as Styled from './Popup.styled';
import { ModalPopupProps } from './types';

const Component: FC<ModalPopupProps> = memo(
    forwardRef((props, ref: Ref<HTMLDivElement>) => {
        const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
        return <Styled.Popup ref={ref} onClick={stopPropagation} {...props} />;
    })
);

Component.displayName = 'Popup';
export const Popup: FC<ModalPopupProps> & WithStyle = Object.assign(Component, { Style: Styled.Popup });
