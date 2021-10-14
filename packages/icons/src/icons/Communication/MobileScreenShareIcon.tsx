import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MobileScreenShareIconSvg from '../../assets/Communication/mobile_screen_share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MobileScreenShareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'MobileScreenShareIcon';

const MobileScreenShareIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default MobileScreenShareIcon;
