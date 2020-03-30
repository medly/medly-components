import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VisibilityOffSvg from '../assets/VisibilityOff.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const VisibilityOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VisibilityOffSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VisibilityOffIcon.Style = SvgIcon;
VisibilityOffIcon.displayName = 'VisibilityOffIcon';
