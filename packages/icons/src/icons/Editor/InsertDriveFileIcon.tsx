import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InsertDriveFileIconSvg from '../../assets/Editor/insert_drive_file_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertDriveFileIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'InsertDriveFileIcon';

const InsertDriveFileIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default InsertDriveFileIcon;
