import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LowPriorityIconSvg from '../../assets/Content/low_priority_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LowPriorityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LowPriorityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LowPriorityIcon.Style = SvgIcon;
LowPriorityIcon.displayName = 'LowPriorityIcon';

export default LowPriorityIcon
