import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermDataSettingIconSvg from '../../assets/Action/perm_data_setting_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermDataSettingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PermDataSettingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PermDataSettingIcon.Style = SvgIcon;
PermDataSettingIcon.displayName = 'PermDataSettingIcon';

export default PermDataSettingIcon
