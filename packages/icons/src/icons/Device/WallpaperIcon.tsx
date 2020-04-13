import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WallpaperIconSvg from '../../assets/Device/wallpaper_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WallpaperIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WallpaperIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WallpaperIcon.Style = SvgIcon;
WallpaperIcon.displayName = 'WallpaperIcon';

export default WallpaperIcon
