import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TimerOffIconSvg from '../../assets/Image/timer_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimerOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TimerOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TimerOffIcon.Style = SvgIcon;
TimerOffIcon.displayName = 'TimerOffIcon';

export default TimerOffIcon
