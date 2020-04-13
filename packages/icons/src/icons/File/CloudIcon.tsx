import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloudIconSvg from '../../assets/File/cloud_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CloudIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CloudIcon.Style = SvgIcon;
CloudIcon.displayName = 'CloudIcon';

export default CloudIcon
