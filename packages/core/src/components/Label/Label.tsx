import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import { LabelStyled } from './Label.styled';
import { Props } from './types';

export const Label: SFC<Props> & WithStyle = React.memo(props => <LabelStyled {...props}>{props.children}</LabelStyled>);

Label.defaultProps = {
    showPointer: false,
    labelPosition: 'left',
    required: false
};
Label.displayName = 'Label';
Label.Style = LabelStyled;
