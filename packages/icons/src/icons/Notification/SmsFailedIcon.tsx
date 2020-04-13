import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SmsFailedIconSvg from '../../assets/Notification/sms_failed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SmsFailedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SmsFailedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SmsFailedIcon.Style = SvgIcon;
SmsFailedIcon.displayName = 'SmsFailedIcon';

export default SmsFailedIcon
