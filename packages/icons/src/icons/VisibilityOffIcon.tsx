// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VisibilityOffSvg from '../assets/VisibilityOff.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const VisibilityOffIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <VisibilityOffSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

VisibilityOffIcon.Style = SvgIcon;
VisibilityOffIcon.displayName = 'VisibilityOffIcon';
