import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScreenLockLandscapeIconSvg from '../../assets/Device/screen_lock_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenLockLandscapeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScreenLockLandscapeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScreenLockLandscapeIcon.Style = SvgIcon;
ScreenLockLandscapeIcon.displayName = 'ScreenLockLandscapeIcon';

export default ScreenLockLandscapeIcon
