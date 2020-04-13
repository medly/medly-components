import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LoopIconSvg from '../../assets/Media/loop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LoopIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LoopIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LoopIcon.Style = SvgIcon;
LoopIcon.displayName = 'LoopIcon';

export default LoopIcon
