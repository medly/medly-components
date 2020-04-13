import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DesktopAccessDisabledIconSvg from '../../assets/Communication/desktop_access_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DesktopAccessDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DesktopAccessDisabledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DesktopAccessDisabledIcon.Style = SvgIcon;
DesktopAccessDisabledIcon.displayName = 'DesktopAccessDisabledIcon';

export default DesktopAccessDisabledIcon
