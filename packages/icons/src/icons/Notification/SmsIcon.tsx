import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SmsIconSvg from '../../assets/Notification/sms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SmsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SmsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SmsIcon.Style = SvgIcon;
SmsIcon.displayName = 'SmsIcon';

export default SmsIcon
