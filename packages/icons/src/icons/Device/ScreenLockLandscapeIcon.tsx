import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScreenLockLandscapeIconSvg from '../../assets/Device/screen_lock_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenLockLandscapeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ScreenLockLandscapeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ScreenLockLandscapeIcon.Style = SvgIcon;
ScreenLockLandscapeIcon.displayName = 'ScreenLockLandscapeIcon';

export default ScreenLockLandscapeIcon
