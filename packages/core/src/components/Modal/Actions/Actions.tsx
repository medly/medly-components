import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './Actions.styled';
import { Props } from './types';

export const Actions: React.FC<Props> & WithStyle = React.memo(props => <Styled.Actions {...{ ...props, id: `${props.id}-actions` }} />);
Actions.displayName = 'Actions';
Actions.Style = Styled.Actions;
