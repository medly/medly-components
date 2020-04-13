import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BackupIconSvg from '../../assets/Action/backup_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BackupIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BackupIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BackupIcon.Style = SvgIcon;
BackupIcon.displayName = 'BackupIcon';

export default BackupIcon
