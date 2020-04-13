import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkEraseIconSvg from '../../assets/Communication/phonelink_erase_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkEraseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PhonelinkEraseIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PhonelinkEraseIcon.Style = SvgIcon;
PhonelinkEraseIcon.displayName = 'PhonelinkEraseIcon';

export default PhonelinkEraseIcon
