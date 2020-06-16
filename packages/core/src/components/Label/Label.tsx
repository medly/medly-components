import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { LabelStyled } from './Label.styled';
import { Props } from './types';

export const Label: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => (
        <LabelStyled ref={ref} {...props}>
            {props.children}
        </LabelStyled>
    ))
);

Label.defaultProps = {
    labelPosition: 'left',
    required: false
};
Label.displayName = 'Label';
Label.Style = LabelStyled;
