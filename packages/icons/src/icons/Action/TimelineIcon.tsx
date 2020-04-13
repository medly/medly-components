import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TimelineIconSvg from '../../assets/Action/timeline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimelineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TimelineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TimelineIcon.Style = SvgIcon;
TimelineIcon.displayName = 'TimelineIcon';

export default TimelineIcon
