import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InboxIconSvg from '../../assets/Content/inbox_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InboxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InboxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InboxIcon.Style = SvgIcon;
InboxIcon.displayName = 'InboxIcon';

export default InboxIcon
