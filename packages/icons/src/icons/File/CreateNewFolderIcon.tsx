import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CreateNewFolderIconSvg from '../../assets/File/create_new_folder_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CreateNewFolderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CreateNewFolderIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CreateNewFolderIcon.Style = SvgIcon;
CreateNewFolderIcon.displayName = 'CreateNewFolderIcon';

export default CreateNewFolderIcon
