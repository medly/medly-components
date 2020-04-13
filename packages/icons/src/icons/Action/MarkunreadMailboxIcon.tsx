import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MarkunreadMailboxIconSvg from '../../assets/Action/markunread_mailbox_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MarkunreadMailboxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MarkunreadMailboxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MarkunreadMailboxIcon.Style = SvgIcon;
MarkunreadMailboxIcon.displayName = 'MarkunreadMailboxIcon';

export default MarkunreadMailboxIcon
