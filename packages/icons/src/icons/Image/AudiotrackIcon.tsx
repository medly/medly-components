import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AudiotrackIconSvg from '../../assets/Image/audiotrack_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AudiotrackIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AudiotrackIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AudiotrackIcon.Style = SvgIcon;
AudiotrackIcon.displayName = 'AudiotrackIcon';

export default AudiotrackIcon
