import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneMissedIconSvg from '../../assets/Notification/phone_missed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneMissedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhoneMissedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhoneMissedIcon.Style = SvgIcon;
PhoneMissedIcon.displayName = 'PhoneMissedIcon';

export default PhoneMissedIcon
