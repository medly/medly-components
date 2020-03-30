import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckCircleSvg from '../assets/CheckCircle.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const CheckCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CheckCircleSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CheckCircleIcon.Style = SvgIcon;
CheckCircleIcon.displayName = 'CheckCircleIcon';
