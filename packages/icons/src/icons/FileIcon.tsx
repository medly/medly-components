// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FileSvg from '../assets/File.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const FileIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <FileSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

FileIcon.Style = SvgIcon;
FileIcon.displayName = 'FileIcon';
