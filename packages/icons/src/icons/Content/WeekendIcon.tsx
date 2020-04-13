import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WeekendIconSvg from '../../assets/Content/weekend_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WeekendIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WeekendIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WeekendIcon.Style = SvgIcon;
WeekendIcon.displayName = 'WeekendIcon';

export default WeekendIcon
