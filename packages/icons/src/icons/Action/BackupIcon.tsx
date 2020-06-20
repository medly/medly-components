import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BackupIconSvg from '../../assets/Action/backup_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BackupIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BackupIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BackupIcon.Style = SvgIcon;
BackupIcon.displayName = 'BackupIcon';

export default BackupIcon
