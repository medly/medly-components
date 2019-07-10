import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { LabelStyled } from './Label.styled';
import { Props } from './types';

const Label: React.FunctionComponent<Props> & WithStyle = React.memo(props => <LabelStyled {...props}>{props.children}</LabelStyled>);

Label.defaultProps = {
    showPointer: false,
    labelPosition: 'left',
    required: false
};
Label.displayName = 'Label';
Label.Style = LabelStyled;

export default Label;
