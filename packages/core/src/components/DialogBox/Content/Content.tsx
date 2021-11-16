import { WithStyle } from '@medly-components/utils';
import { useContext, memo } from 'react';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Content.styled';
import type { FC } from 'react';

const Component: FC = memo(({ children }) => {
    const { id } = useContext(DialogBoxContext);

    return <Styled.Content {...{ id: `${id}-content` }}>{children}</Styled.Content>;
});
Component.displayName = 'Content';
export const Content: FC & WithStyle = Object.assign(Component, { Style: Styled.Content });
