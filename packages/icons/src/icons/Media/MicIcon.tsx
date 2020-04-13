import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MicIconSvg from '../../assets/Media/mic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MicIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MicIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MicIcon.Style = SvgIcon;
MicIcon.displayName = 'MicIcon';

export default MicIcon
