import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Actions.styled';
import { ModalActionUserProps } from './types';

export const Actions: React.FC<ModalActionUserProps> & WithStyle = React.memo(({ children, alignItems }) => {
    const { id, scrollState, isSmallScreen } = useContext(ModalContext);

    return <Styled.Actions {...{ scrollState, isSmallScreen, alignItems, id: `${id}-actions` }}>{children}</Styled.Actions>;
});
Actions.displayName = 'Actions';
Actions.Style = Styled.Actions;
