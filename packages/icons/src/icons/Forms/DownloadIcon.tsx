import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DownloadIconSvg from '../../assets/Forms/Download.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DownloadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DownloadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DownloadIcon.Style = SvgIcon;
DownloadIcon.displayName = 'DownloadIcon';

export default DownloadIcon
