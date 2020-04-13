import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MicOffIconSvg from '../../assets/Media/mic_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MicOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MicOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MicOffIcon.Style = SvgIcon;
MicOffIcon.displayName = 'MicOffIcon';

export default MicOffIcon
