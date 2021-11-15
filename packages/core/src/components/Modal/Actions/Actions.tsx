import { WithStyle } from '@medly-components/utils';
import { useContext, memo } from 'react';
import { ModalContext } from '../Modal.context';
import * as Styled from './Actions.styled';
import { ModalActionUserProps } from './types';
import type { FC } from 'react';

const Component: FC<ModalActionUserProps> = memo(({ children, alignItems }) => {
    const { id, scrollState, isSmallScreen } = useContext(ModalContext);

    return <Styled.Actions {...{ scrollState, isSmallScreen, alignItems, id: `${id}-actions` }}>{children}</Styled.Actions>;
});
Component.displayName = 'Actions';
export const Actions: FC<ModalActionUserProps> & WithStyle = Object.assign(Component, { Style: Styled.Actions });
