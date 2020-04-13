import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SdCardIconSvg from '../../assets/Notification/sd_card_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SdCardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SdCardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SdCardIcon.Style = SvgIcon;
SdCardIcon.displayName = 'SdCardIcon';

export default SdCardIcon
