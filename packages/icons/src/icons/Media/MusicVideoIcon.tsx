import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MusicVideoIconSvg from '../../assets/Media/music_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MusicVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MusicVideoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MusicVideoIcon.Style = SvgIcon;
MusicVideoIcon.displayName = 'MusicVideoIcon';

export default MusicVideoIcon
