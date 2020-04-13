import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RecentActorsIconSvg from '../../assets/Media/recent_actors_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RecentActorsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RecentActorsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RecentActorsIcon.Style = SvgIcon;
RecentActorsIcon.displayName = 'RecentActorsIcon';

export default RecentActorsIcon
