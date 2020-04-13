import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScheduleIconSvg from '../../assets/Action/schedule_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScheduleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ScheduleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ScheduleIcon.Style = SvgIcon;
ScheduleIcon.displayName = 'ScheduleIcon';

export default ScheduleIcon
