import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './Content.styled';
import { Props } from './types';

export const Content: React.FC<Props> & WithStyle = React.memo(({ id, scrollState, dispatch, ...restProps }) => {
    return <Styled.Content {...{ ...restProps, id: `${id}-content` }} />;
});
Content.displayName = 'Content';
Content.Style = Styled.Content;
