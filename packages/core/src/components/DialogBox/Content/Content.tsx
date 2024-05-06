import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useContext } from 'react';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Content.styled';

const Component: FCC = memo(({ children }) => {
    const { id } = useContext(DialogBoxContext);

    return <Styled.Content {...{ id: `${id}-content` }}>{children}</Styled.Content>;
});
Component.displayName = 'Content';
export const Content: FCC & WithStyle = Object.assign(Component, { Style: Styled.Content });
