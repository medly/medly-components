import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TimerOffIconSvg from '../../assets/Image/timer_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimerOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TimerOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TimerOffIcon.Style = SvgIcon;
TimerOffIcon.displayName = 'TimerOffIcon';

export default TimerOffIcon
