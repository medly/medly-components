import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import YoutubeSearchedForIconSvg from '../../assets/Action/youtube_searched_for_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const YoutubeSearchedForIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <YoutubeSearchedForIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

YoutubeSearchedForIcon.Style = SvgIcon;
YoutubeSearchedForIcon.displayName = 'YoutubeSearchedForIcon';

export default YoutubeSearchedForIcon
