import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PriorityHighIconSvg from '../../assets/Notification/priority_high_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PriorityHighIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PriorityHighIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PriorityHighIcon.Style = SvgIcon;
PriorityHighIcon.displayName = 'PriorityHighIcon';

export default PriorityHighIcon
