import { WithStyle } from '@medly-components/utils';
import { memo, forwardRef } from 'react';
import { LabelStyled } from './Label.styled';
import { LabelProps } from './types';
import type { FC } from 'react';

const Component: FC<LabelProps> = memo(
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
export const Label: FC<LabelProps> & WithStyle = Object.assign(Component, { Style: LabelStyled });
