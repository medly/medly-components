import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FolderSharedIconSvg from '../../assets/File/folder_shared_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FolderSharedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FolderSharedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FolderSharedIcon.Style = SvgIcon;
FolderSharedIcon.displayName = 'FolderSharedIcon';

export default FolderSharedIcon
