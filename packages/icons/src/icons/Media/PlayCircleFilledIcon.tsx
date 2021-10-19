import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlayCircleFilledIconSvg from '../../assets/Media/play_circle_filled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlayCircleFilledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PlayCircleFilledIcon';

const PlayCircleFilledIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PlayCircleFilledIcon;
