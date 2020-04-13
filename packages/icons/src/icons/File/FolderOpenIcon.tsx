import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FolderOpenIconSvg from '../../assets/File/folder_open_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FolderOpenIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FolderOpenIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FolderOpenIcon.Style = SvgIcon;
FolderOpenIcon.displayName = 'FolderOpenIcon';

export default FolderOpenIcon
