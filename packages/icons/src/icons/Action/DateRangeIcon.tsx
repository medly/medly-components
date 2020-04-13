import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DateRangeIconSvg from '../../assets/Action/date_range_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DateRangeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DateRangeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DateRangeIcon.Style = SvgIcon;
DateRangeIcon.displayName = 'DateRangeIcon';

export default DateRangeIcon
