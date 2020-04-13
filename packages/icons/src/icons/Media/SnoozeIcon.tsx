import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SnoozeIconSvg from '../../assets/Media/snooze_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SnoozeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SnoozeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SnoozeIcon.Style = SvgIcon;
SnoozeIcon.displayName = 'SnoozeIcon';

export default SnoozeIcon
