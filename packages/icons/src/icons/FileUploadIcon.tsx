// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FileUploadSvg from '../assets/FileUpload.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const FileUploadIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <FileUploadSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

FileUploadIcon.Style = SvgIcon;
FileUploadIcon.displayName = 'FileUploadIcon';
