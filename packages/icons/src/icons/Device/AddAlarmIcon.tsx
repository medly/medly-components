import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddAlarmIconSvg from '../../assets/Device/add_alarm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddAlarmIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddAlarmIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddAlarmIcon.Style = SvgIcon;
AddAlarmIcon.displayName = 'AddAlarmIcon';

export default AddAlarmIcon
