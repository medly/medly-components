import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneIphoneIconSvg from '../../assets/Hardware/phone_iphone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneIphoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhoneIphoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhoneIphoneIcon.Style = SvgIcon;
PhoneIphoneIcon.displayName = 'PhoneIphoneIcon';

export default PhoneIphoneIcon
