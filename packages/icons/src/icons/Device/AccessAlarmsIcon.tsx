import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccessAlarmsIconSvg from '../../assets/Device/access_alarms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessAlarmsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccessAlarmsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccessAlarmsIcon.Style = SvgIcon;
AccessAlarmsIcon.displayName = 'AccessAlarmsIcon';

export default AccessAlarmsIcon
