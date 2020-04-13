import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Timer10IconSvg from '../../assets/Image/timer_10_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Timer10Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Timer10IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Timer10Icon.Style = SvgIcon;
Timer10Icon.displayName = 'Timer10Icon';

export default Timer10Icon
