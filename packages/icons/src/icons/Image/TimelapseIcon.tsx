import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TimelapseIconSvg from '../../assets/Image/timelapse_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimelapseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TimelapseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TimelapseIcon.Style = SvgIcon;
TimelapseIcon.displayName = 'TimelapseIcon';

export default TimelapseIcon
