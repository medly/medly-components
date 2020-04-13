import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlayArrowIconSvg from '../../assets/Media/play_arrow_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayArrowIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlayArrowIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlayArrowIcon.Style = SvgIcon;
PlayArrowIcon.displayName = 'PlayArrowIcon';

export default PlayArrowIcon
