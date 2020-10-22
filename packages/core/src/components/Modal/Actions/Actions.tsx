import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Actions.styled';
import { Props } from './types';

export const Actions: React.FC<Props> & WithStyle = React.memo(() => {
    const { id, scrollState } = useContext(ModalContext);

    return <Styled.Actions {...{ scrollState, id: `${id}-actions` }} />;
});
Actions.displayName = 'Actions';
Actions.Style = Styled.Actions;
