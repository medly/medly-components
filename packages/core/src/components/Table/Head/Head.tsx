import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { HeadStyled } from './Head.styled';

const Head: React.SFC & WithStyle = React.memo(props => <HeadStyled>{props.children}</HeadStyled>);

Head.displayName = 'Head';
Head.Style = HeadStyled;

export default Head;
