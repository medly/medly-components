import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlarmAddIconSvg from '../../assets/Action/alarm_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AlarmAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AlarmAddIcon.Style = SvgIcon;
AlarmAddIcon.displayName = 'AlarmAddIcon';

export default AlarmAddIcon
