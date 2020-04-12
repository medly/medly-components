import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UploadIconSvg from '../assets/Upload.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const UploadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UploadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UploadIcon.Style = SvgIcon;
UploadIcon.displayName = 'UploadIcon';

export default UploadIcon
