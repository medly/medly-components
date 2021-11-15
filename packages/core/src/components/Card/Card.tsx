import { WithStyle } from '@medly-components/utils';
import { memo, forwardRef } from 'react';
import * as Styled from './Card.styled';
import { CardProps } from './types';
import type { FC } from 'react';

const Component: FC<CardProps> = memo(forwardRef((props, ref) => <Styled.Card ref={ref} {...props} />));
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
export const Card: FC<CardProps> & WithStyle = Object.assign(Component, { Style: Styled.Card });
