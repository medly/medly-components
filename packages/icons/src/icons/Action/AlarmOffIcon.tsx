import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlarmOffIconSvg from '../../assets/Action/alarm_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AlarmOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AlarmOffIcon.Style = SvgIcon;
AlarmOffIcon.displayName = 'AlarmOffIcon';

export default AlarmOffIcon
