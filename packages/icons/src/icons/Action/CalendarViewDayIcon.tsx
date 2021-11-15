import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import CalendarViewDayIconSvg from '../../assets/Action/calendar_view_day_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CalendarViewDayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'CalendarViewDayIcon';

const CalendarViewDayIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default CalendarViewDayIcon;
