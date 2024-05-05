import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { forwardRef, memo, Ref } from 'react';
import * as Styled from './Popup.styled';
import { ModalPopupProps } from './types';

const Component: FCC<ModalPopupProps> = memo(forwardRef((props, ref: Ref<HTMLDivElement>) => <Styled.Popup ref={ref} {...props} />));

Component.displayName = 'Popup';
export const Popup: FCC<ModalPopupProps> & WithStyle = Object.assign(Component, { Style: Styled.Popup });
