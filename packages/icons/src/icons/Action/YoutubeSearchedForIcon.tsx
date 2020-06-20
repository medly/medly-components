import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import YoutubeSearchedForIconSvg from '../../assets/Action/youtube_searched_for_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const YoutubeSearchedForIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <YoutubeSearchedForIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

YoutubeSearchedForIcon.Style = SvgIcon;
YoutubeSearchedForIcon.displayName = 'YoutubeSearchedForIcon';

export default YoutubeSearchedForIcon
