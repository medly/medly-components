import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsCellIconSvg from '../../assets/Action/settings_cell_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsCellIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsCellIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsCellIcon.Style = SvgIcon;
SettingsCellIcon.displayName = 'SettingsCellIcon';

export default SettingsCellIcon
