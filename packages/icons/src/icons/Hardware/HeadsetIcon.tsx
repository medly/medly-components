import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HeadsetIconSvg from '../../assets/Hardware/headset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HeadsetIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HeadsetIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HeadsetIcon.Style = SvgIcon;
HeadsetIcon.displayName = 'HeadsetIcon';

export default HeadsetIcon
