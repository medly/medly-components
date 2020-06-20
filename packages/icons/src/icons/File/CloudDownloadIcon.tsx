import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CloudDownloadIconSvg from '../../assets/File/cloud_download_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudDownloadIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CloudDownloadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CloudDownloadIcon.Style = SvgIcon;
CloudDownloadIcon.displayName = 'CloudDownloadIcon';

export default CloudDownloadIcon
