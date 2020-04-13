import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FolderIconSvg from '../../assets/File/folder_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FolderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FolderIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FolderIcon.Style = SvgIcon;
FolderIcon.displayName = 'FolderIcon';

export default FolderIcon
