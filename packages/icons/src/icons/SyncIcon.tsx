import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SyncSvg from '../assets/Sync.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const SyncIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SyncSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SyncIcon.Style = SvgIcon;
SyncIcon.displayName = 'SyncIcon';
