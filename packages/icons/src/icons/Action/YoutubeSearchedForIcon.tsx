import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import YoutubeSearchedForIconSvg from '../../assets/Action/youtube_searched_for_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <YoutubeSearchedForIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'YoutubeSearchedForIcon';

const YoutubeSearchedForIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default YoutubeSearchedForIcon
