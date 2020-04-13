import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloudDoneIconSvg from '../../assets/File/cloud_done_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudDoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CloudDoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CloudDoneIcon.Style = SvgIcon;
CloudDoneIcon.displayName = 'CloudDoneIcon';

export default CloudDoneIcon
