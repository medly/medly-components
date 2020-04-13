import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsPhoneIconSvg from '../../assets/Action/settings_phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsPhoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsPhoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsPhoneIcon.Style = SvgIcon;
SettingsPhoneIcon.displayName = 'SettingsPhoneIcon';

export default SettingsPhoneIcon
