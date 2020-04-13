import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ControlPointIconSvg from '../../assets/Image/control_point_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ControlPointIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ControlPointIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ControlPointIcon.Style = SvgIcon;
ControlPointIcon.displayName = 'ControlPointIcon';

export default ControlPointIcon
