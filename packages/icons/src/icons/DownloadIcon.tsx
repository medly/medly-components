// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DownloadSvg from '../assets/Download.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const DownloadIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <DownloadSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

DownloadIcon.Style = SvgIcon;
DownloadIcon.displayName = 'DownloadIcon';
