import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PowerIconSvg from '../../assets/Notification/power_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PowerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PowerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PowerIcon.Style = SvgIcon;
PowerIcon.displayName = 'PowerIcon';

export default PowerIcon
