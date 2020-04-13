import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MobileFriendlyIconSvg from '../../assets/Device/mobile_friendly_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MobileFriendlyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MobileFriendlyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MobileFriendlyIcon.Style = SvgIcon;
MobileFriendlyIcon.displayName = 'MobileFriendlyIcon';

export default MobileFriendlyIcon
