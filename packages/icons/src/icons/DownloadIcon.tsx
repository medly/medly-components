import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DownloadSvg from '../assets/Download.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const DownloadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DownloadSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DownloadIcon.Style = SvgIcon;
DownloadIcon.displayName = 'DownloadIcon';
