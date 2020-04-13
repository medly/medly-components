import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccessAlarmIconSvg from '../../assets/Device/access_alarm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessAlarmIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccessAlarmIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccessAlarmIcon.Style = SvgIcon;
AccessAlarmIcon.displayName = 'AccessAlarmIcon';

export default AccessAlarmIcon
