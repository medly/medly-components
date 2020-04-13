import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneAndroidIconSvg from '../../assets/Hardware/phone_android_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneAndroidIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhoneAndroidIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhoneAndroidIcon.Style = SvgIcon;
PhoneAndroidIcon.displayName = 'PhoneAndroidIcon';

export default PhoneAndroidIcon
