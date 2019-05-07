import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { LabelStyled } from './Label.styled';
import { Props } from './types';

const Label: React.FunctionComponent<Props> & WithStyle = props => <LabelStyled {...props}>{props.children}</LabelStyled>;

Label.displayName = 'Label';
Label.Style = LabelStyled;

export default Label;
