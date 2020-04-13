import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsBackupRestoreIconSvg from '../../assets/Action/settings_backup_restore_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsBackupRestoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsBackupRestoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsBackupRestoreIcon.Style = SvgIcon;
SettingsBackupRestoreIcon.displayName = 'SettingsBackupRestoreIcon';

export default SettingsBackupRestoreIcon
