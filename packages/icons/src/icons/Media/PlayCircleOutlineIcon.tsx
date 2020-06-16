import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlayCircleOutlineIconSvg from '../../assets/Media/play_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayCircleOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlayCircleOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PlayCircleOutlineIcon.Style = SvgIcon;
PlayCircleOutlineIcon.displayName = 'PlayCircleOutlineIcon';

export default PlayCircleOutlineIcon
