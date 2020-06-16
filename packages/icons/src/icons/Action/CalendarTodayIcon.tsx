import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CalendarTodayIconSvg from '../../assets/Action/calendar_today_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CalendarTodayIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CalendarTodayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CalendarTodayIcon.Style = SvgIcon;
CalendarTodayIcon.displayName = 'CalendarTodayIcon';

export default CalendarTodayIcon
