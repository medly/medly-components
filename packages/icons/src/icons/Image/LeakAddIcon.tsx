import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LeakAddIconSvg from '../../assets/Image/leak_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LeakAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LeakAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LeakAddIcon.Style = SvgIcon;
LeakAddIcon.displayName = 'LeakAddIcon';

export default LeakAddIcon
