import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TimerIconSvg from '../../assets/Image/timer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TimerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TimerIcon.Style = SvgIcon;
TimerIcon.displayName = 'TimerIcon';

export default TimerIcon
