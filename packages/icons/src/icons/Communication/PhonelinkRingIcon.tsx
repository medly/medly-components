import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkRingIconSvg from '../../assets/Communication/phonelink_ring_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkRingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhonelinkRingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhonelinkRingIcon.Style = SvgIcon;
PhonelinkRingIcon.displayName = 'PhonelinkRingIcon';

export default PhonelinkRingIcon
