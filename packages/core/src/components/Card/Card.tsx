import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import * as Styled from './Card.styled';
import { Props } from './types';

export const Card: FC<Props> & WithStyle = React.memo(React.forwardRef((props, ref) => <Styled.Card ref={ref} {...props} />));
Card.defaultProps = {
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
Card.displayName = 'Card';
Card.Style = Styled.Card;
