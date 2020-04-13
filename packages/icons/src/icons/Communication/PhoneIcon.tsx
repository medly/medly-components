import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhoneIconSvg from '../../assets/Communication/phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhoneIcon.Style = SvgIcon;
PhoneIcon.displayName = 'PhoneIcon';

export default PhoneIcon
