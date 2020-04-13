import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MusicOffIconSvg from '../../assets/Image/music_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MusicOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MusicOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MusicOffIcon.Style = SvgIcon;
MusicOffIcon.displayName = 'MusicOffIcon';

export default MusicOffIcon
