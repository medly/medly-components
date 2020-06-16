import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FullscreenIconSvg from '../../assets/Navigation/fullscreen_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FullscreenIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FullscreenIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FullscreenIcon.Style = SvgIcon;
FullscreenIcon.displayName = 'FullscreenIcon';

export default FullscreenIcon
