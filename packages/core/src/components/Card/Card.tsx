import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { forwardRef, memo } from 'react';
import * as Styled from './Card.styled';
import { CardProps } from './types';

const Component: FCC<CardProps> = memo(forwardRef((props, ref) => <Styled.Card ref={ref} {...props} />));
Component.defaultProps = {
    display: 'block',
    variant: 'solid',
    flowDirection: 'vertical',
    separator: false,
    flex: 1,
    withoutPadding: false,
    alignItems: 'center',
    fullWidth: false,
    fullHeight: false
};
Component.displayName = 'Card';
export const Card: FCC<CardProps> & WithStyle = Object.assign(Component, { Style: Styled.Card });
