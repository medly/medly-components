import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkOffIconSvg from '../../assets/Hardware/phonelink_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhonelinkOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhonelinkOffIcon.Style = SvgIcon;
PhonelinkOffIcon.displayName = 'PhonelinkOffIcon';

export default PhonelinkOffIcon
