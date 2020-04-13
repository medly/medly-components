import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneCallbackIconSvg from '../../assets/Notification/phone_callback_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneCallbackIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhoneCallbackIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhoneCallbackIcon.Style = SvgIcon;
PhoneCallbackIcon.displayName = 'PhoneCallbackIcon';

export default PhoneCallbackIcon
