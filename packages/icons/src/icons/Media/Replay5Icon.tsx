import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Replay5IconSvg from '../../assets/Media/replay_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Replay5Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Replay5IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Replay5Icon.Style = SvgIcon;
Replay5Icon.displayName = 'Replay5Icon';

export default Replay5Icon
