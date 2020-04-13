import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PowerOffIconSvg from '../../assets/Notification/power_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PowerOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PowerOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PowerOffIcon.Style = SvgIcon;
PowerOffIcon.displayName = 'PowerOffIcon';

export default PowerOffIcon
