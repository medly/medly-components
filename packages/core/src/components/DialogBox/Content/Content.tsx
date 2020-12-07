import { WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import { DialogBoxContext } from '../DialogBox.context';
import * as Styled from './Content.styled';

export const Content: React.FC & WithStyle = React.memo(({ children }) => {
    const { id, headerHeight } = useContext(DialogBoxContext);

    return (
        <Styled.Content  {...{ headerHeight, id: `${id}-content` }}>
            {children}
        </Styled.Content>
    );
});
Content.displayName = 'Content';
Content.Style = Styled.Content;
