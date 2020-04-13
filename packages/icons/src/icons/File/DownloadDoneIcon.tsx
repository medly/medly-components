import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DownloadDoneIconSvg from '../../assets/File/download_done_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DownloadDoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DownloadDoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DownloadDoneIcon.Style = SvgIcon;
DownloadDoneIcon.displayName = 'DownloadDoneIcon';

export default DownloadDoneIcon
