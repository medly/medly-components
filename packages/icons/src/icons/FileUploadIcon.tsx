import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FileUploadIconSvg from '../assets/FileUpload.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const FileUploadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FileUploadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FileUploadIcon.Style = SvgIcon;
FileUploadIcon.displayName = 'FileUploadIcon';

export default FileUploadIcon
