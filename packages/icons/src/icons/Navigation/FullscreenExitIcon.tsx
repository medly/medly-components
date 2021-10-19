import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FullscreenExitIconSvg from '../../assets/Navigation/fullscreen_exit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FullscreenExitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FullscreenExitIcon';

const FullscreenExitIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FullscreenExitIcon;
