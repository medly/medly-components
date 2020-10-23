import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Actions.styled';
import { Props } from './types';

export const Actions: React.FC<Props> & WithStyle = React.memo(({ children }) => {
    const { id, scrollState, isSmallScreen } = useContext(ModalContext);

    return <Styled.Actions {...{ scrollState, isSmallScreen, id: `${id}-actions` }}>{children}</Styled.Actions>;
});
Actions.displayName = 'Actions';
Actions.Style = Styled.Actions;
