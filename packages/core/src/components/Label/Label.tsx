import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { LabelStyled } from './Label.styled';
import { LabelProps } from './types';

const Component: FC<LabelProps> = React.memo(
    React.forwardRef((props, ref) => (
        <LabelStyled ref={ref} {...props}>
            {props.children}
        </LabelStyled>
    ))
);

Component.defaultProps = {
    labelPosition: 'left',
    required: false
};
Component.displayName = 'Label';
export const Label: FC<LabelProps> & WithStyle = Object.assign(Component, { Style: LabelStyled });
