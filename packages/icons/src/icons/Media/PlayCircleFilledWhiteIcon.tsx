import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlayCircleFilledWhiteIconSvg from '../../assets/Media/play_circle_filled_white_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayCircleFilledWhiteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlayCircleFilledWhiteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PlayCircleFilledWhiteIcon.Style = SvgIcon;
PlayCircleFilledWhiteIcon.displayName = 'PlayCircleFilledWhiteIcon';

export default PlayCircleFilledWhiteIcon
