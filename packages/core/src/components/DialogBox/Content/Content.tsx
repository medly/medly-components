import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Content.styled';

const Component: React.FC = React.memo(({ children }) => {
    const { id } = useContext(DialogBoxContext);

    return <Styled.Content {...{ id: `${id}-content` }}>{children}</Styled.Content>;
});
Component.displayName = 'Content';
export const Content: React.FC & WithStyle = Object.assign(Component, { Style: Styled.Content });
