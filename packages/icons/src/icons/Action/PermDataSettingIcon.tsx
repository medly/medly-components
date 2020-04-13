import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermDataSettingIconSvg from '../../assets/Action/perm_data_setting_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermDataSettingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermDataSettingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PermDataSettingIcon.Style = SvgIcon;
PermDataSettingIcon.displayName = 'PermDataSettingIcon';

export default PermDataSettingIcon
