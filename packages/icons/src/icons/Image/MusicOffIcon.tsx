import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MusicOffIconSvg from '../../assets/Image/music_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MusicOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MusicOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MusicOffIcon.Style = SvgIcon;
MusicOffIcon.displayName = 'MusicOffIcon';

export default MusicOffIcon
