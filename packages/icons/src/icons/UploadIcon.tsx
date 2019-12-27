import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UploadSvg from '../assets/Upload.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const UploadIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UploadSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UploadIcon.Style = SvgIcon;
UploadIcon.displayName = 'UploadIcon';
