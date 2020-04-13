import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkIconSvg from '../../assets/Hardware/phonelink_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhonelinkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhonelinkIcon.Style = SvgIcon;
PhonelinkIcon.displayName = 'PhonelinkIcon';

export default PhonelinkIcon
