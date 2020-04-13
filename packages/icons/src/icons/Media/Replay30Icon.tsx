import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Replay30IconSvg from '../../assets/Media/replay_30_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Replay30Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Replay30IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Replay30Icon.Style = SvgIcon;
Replay30Icon.displayName = 'Replay30Icon';

export default Replay30Icon
