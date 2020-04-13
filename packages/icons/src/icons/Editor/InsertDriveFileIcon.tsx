import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertDriveFileIconSvg from '../../assets/Editor/insert_drive_file_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertDriveFileIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InsertDriveFileIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InsertDriveFileIcon.Style = SvgIcon;
InsertDriveFileIcon.displayName = 'InsertDriveFileIcon';

export default InsertDriveFileIcon
