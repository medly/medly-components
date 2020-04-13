import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AttachmentIconSvg from '../../assets/File/attachment_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AttachmentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AttachmentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AttachmentIcon.Style = SvgIcon;
AttachmentIcon.displayName = 'AttachmentIcon';

export default AttachmentIcon
