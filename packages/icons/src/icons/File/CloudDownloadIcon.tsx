import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloudDownloadIconSvg from '../../assets/File/cloud_download_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudDownloadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CloudDownloadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CloudDownloadIcon.Style = SvgIcon;
CloudDownloadIcon.displayName = 'CloudDownloadIcon';

export default CloudDownloadIcon
