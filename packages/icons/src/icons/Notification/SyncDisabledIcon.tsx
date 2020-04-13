import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SyncDisabledIconSvg from '../../assets/Notification/sync_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SyncDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SyncDisabledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SyncDisabledIcon.Style = SvgIcon;
SyncDisabledIcon.displayName = 'SyncDisabledIcon';

export default SyncDisabledIcon
