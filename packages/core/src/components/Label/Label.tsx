import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { forwardRef, memo } from 'react';
import { LabelStyled } from './Label.styled';
import { LabelProps } from './types';

const Component: FCC<LabelProps> = memo(
    forwardRef((props, ref) => (
        <LabelStyled ref={ref} labelPosition={props.labelPosition!} {...props}>
            {props.children}
        </LabelStyled>
    ))
);

Component.defaultProps = {
    labelPosition: 'left',
    required: false
};
Component.displayName = 'Label';
export const Label: FCC<LabelProps> & WithStyle = Object.assign(Component, { Style: LabelStyled });
