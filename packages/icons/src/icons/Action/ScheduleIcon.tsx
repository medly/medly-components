import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScheduleIconSvg from '../../assets/Action/schedule_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScheduleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScheduleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScheduleIcon.Style = SvgIcon;
ScheduleIcon.displayName = 'ScheduleIcon';

export default ScheduleIcon
