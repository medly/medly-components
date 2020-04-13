import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DateRangeIconSvg from '../../assets/Action/date_range_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DateRangeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DateRangeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DateRangeIcon.Style = SvgIcon;
DateRangeIcon.displayName = 'DateRangeIcon';

export default DateRangeIcon
