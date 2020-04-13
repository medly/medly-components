import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlarmIconSvg from '../../assets/Action/alarm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AlarmIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AlarmIcon.Style = SvgIcon;
AlarmIcon.displayName = 'AlarmIcon';

export default AlarmIcon
