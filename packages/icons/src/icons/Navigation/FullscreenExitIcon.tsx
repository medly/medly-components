import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FullscreenExitIconSvg from '../../assets/Navigation/fullscreen_exit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FullscreenExitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FullscreenExitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FullscreenExitIcon.Style = SvgIcon;
FullscreenExitIcon.displayName = 'FullscreenExitIcon';

export default FullscreenExitIcon
