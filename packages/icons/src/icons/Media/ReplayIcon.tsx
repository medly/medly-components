import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReplayIconSvg from '../../assets/Media/replay_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReplayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReplayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReplayIcon.Style = SvgIcon;
ReplayIcon.displayName = 'ReplayIcon';

export default ReplayIcon
