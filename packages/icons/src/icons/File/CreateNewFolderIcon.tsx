import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CreateNewFolderIconSvg from '../../assets/File/create_new_folder_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CreateNewFolderIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CreateNewFolderIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CreateNewFolderIcon.Style = SvgIcon;
CreateNewFolderIcon.displayName = 'CreateNewFolderIcon';

export default CreateNewFolderIcon
