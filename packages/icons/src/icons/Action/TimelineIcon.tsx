import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TimelineIconSvg from '../../assets/Action/timeline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimelineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TimelineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TimelineIcon.Style = SvgIcon;
TimelineIcon.displayName = 'TimelineIcon';

export default TimelineIcon
