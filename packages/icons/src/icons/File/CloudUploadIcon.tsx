import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CloudUploadIconSvg from '../../assets/File/cloud_upload_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudUploadIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CloudUploadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CloudUploadIcon.Style = SvgIcon;
CloudUploadIcon.displayName = 'CloudUploadIcon';

export default CloudUploadIcon
