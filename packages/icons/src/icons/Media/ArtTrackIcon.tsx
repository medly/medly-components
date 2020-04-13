import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArtTrackIconSvg from '../../assets/Media/art_track_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArtTrackIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArtTrackIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArtTrackIcon.Style = SvgIcon;
ArtTrackIcon.displayName = 'ArtTrackIcon';

export default ArtTrackIcon
