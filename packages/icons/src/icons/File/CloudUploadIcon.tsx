import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloudUploadIconSvg from '../../assets/File/cloud_upload_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudUploadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CloudUploadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CloudUploadIcon.Style = SvgIcon;
CloudUploadIcon.displayName = 'CloudUploadIcon';

export default CloudUploadIcon
