import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FolderSpecialIconSvg from '../../assets/Notification/folder_special_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FolderSpecialIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FolderSpecialIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FolderSpecialIcon.Style = SvgIcon;
FolderSpecialIcon.displayName = 'FolderSpecialIcon';

export default FolderSpecialIcon
