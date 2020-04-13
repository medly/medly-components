import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermDeviceInformationIconSvg from '../../assets/Action/perm_device_information_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermDeviceInformationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PermDeviceInformationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PermDeviceInformationIcon.Style = SvgIcon;
PermDeviceInformationIcon.displayName = 'PermDeviceInformationIcon';

export default PermDeviceInformationIcon
