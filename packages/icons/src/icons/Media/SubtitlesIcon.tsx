import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SubtitlesIconSvg from '../../assets/Media/subtitles_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubtitlesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SubtitlesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SubtitlesIcon.Style = SvgIcon;
SubtitlesIcon.displayName = 'SubtitlesIcon';

export default SubtitlesIcon
