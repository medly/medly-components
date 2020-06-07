import React from 'react';
import { Wrapper } from './Content.styled';

export const Content = React.memo(({ children }) => {
    return <Wrapper>{children}</Wrapper>;
});
Content.displayName = 'Content';
