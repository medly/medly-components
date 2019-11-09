import React, { SFC } from 'react';

import { WithStyle } from '@medly-components/utils';
import * as Styled from './Card.styled';
import { Props } from './types';

export const Card: SFC<Props> & WithStyle = props => <Styled.Card {...props}>{props.children}</Styled.Card>;
Card.defaultProps = {
    variant: 'outlined',
    flowDirection: 'vertical',
    separator: false,
    flex: 1,
    withPadding: true,
    alignItems: 'center',
    clickable: false,
    fullWidth: false,
    fullHeight: false
};
Card.Style = Styled.Card;
