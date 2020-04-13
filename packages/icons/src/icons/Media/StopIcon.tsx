import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StopIconSvg from '../../assets/Media/stop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StopIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StopIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StopIcon.Style = SvgIcon;
StopIcon.displayName = 'StopIcon';

export default StopIcon
