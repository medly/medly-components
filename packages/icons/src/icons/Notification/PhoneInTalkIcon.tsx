import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneInTalkIconSvg from '../../assets/Notification/phone_in_talk_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneInTalkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhoneInTalkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhoneInTalkIcon.Style = SvgIcon;
PhoneInTalkIcon.displayName = 'PhoneInTalkIcon';

export default PhoneInTalkIcon
