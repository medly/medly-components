import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PermDeviceInformationIconSvg from '../../assets/Action/perm_device_information_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermDeviceInformationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermDeviceInformationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PermDeviceInformationIcon.Style = SvgIcon;
PermDeviceInformationIcon.displayName = 'PermDeviceInformationIcon';

export default PermDeviceInformationIcon
