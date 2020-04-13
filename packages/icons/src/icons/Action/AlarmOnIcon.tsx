import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlarmOnIconSvg from '../../assets/Action/alarm_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AlarmOnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AlarmOnIcon.Style = SvgIcon;
AlarmOnIcon.displayName = 'AlarmOnIcon';

export default AlarmOnIcon
