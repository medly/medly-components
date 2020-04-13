import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FileIconSvg from '../../assets/Forms/File.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FileIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FileIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FileIcon.Style = SvgIcon;
FileIcon.displayName = 'FileIcon';

export default FileIcon
