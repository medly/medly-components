import React, { SFC } from 'react';

import { WithStyle } from '@medly-components/utils';
import * as Styled from './Card.styled';
import { Props } from './types';

export const Card: SFC<Props> & WithStyle = props => <Styled.Card {...props}>{props.children}</Styled.Card>;
Card.Style = Styled.Card;
