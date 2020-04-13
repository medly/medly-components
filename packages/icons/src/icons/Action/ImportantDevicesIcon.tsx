import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ImportantDevicesIconSvg from '../../assets/Action/important_devices_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImportantDevicesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ImportantDevicesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ImportantDevicesIcon.Style = SvgIcon;
ImportantDevicesIcon.displayName = 'ImportantDevicesIcon';

export default ImportantDevicesIcon
