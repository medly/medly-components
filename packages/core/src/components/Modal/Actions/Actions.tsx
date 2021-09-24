import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Actions.styled';
import { ModalActionUserProps } from './types';

const Component: React.FC<ModalActionUserProps> = React.memo(({ children, alignItems }) => {
    const { id, scrollState, isSmallScreen } = useContext(ModalContext);

    return <Styled.Actions {...{ scrollState, isSmallScreen, alignItems, id: `${id}-actions` }}>{children}</Styled.Actions>;
});
Component.displayName = 'Actions';
export const Actions: React.FC<ModalActionUserProps> & WithStyle = Object.assign(Component, { Style: Styled.Actions });
