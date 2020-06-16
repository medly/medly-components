import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FolderOpenIconSvg from '../../assets/File/folder_open_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FolderOpenIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FolderOpenIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FolderOpenIcon.Style = SvgIcon;
FolderOpenIcon.displayName = 'FolderOpenIcon';

export default FolderOpenIcon
