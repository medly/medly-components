import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TabletAndroidIconSvg from '../../assets/Hardware/tablet_android_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabletAndroidIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TabletAndroidIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TabletAndroidIcon.Style = SvgIcon;
TabletAndroidIcon.displayName = 'TabletAndroidIcon';

export default TabletAndroidIcon
