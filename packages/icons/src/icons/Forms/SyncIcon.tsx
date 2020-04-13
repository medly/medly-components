import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SyncIconSvg from '../../assets/Forms/Sync.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SyncIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SyncIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SyncIcon.Style = SvgIcon;
SyncIcon.displayName = 'SyncIcon';

export default SyncIcon
