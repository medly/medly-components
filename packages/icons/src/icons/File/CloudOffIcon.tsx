import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloudOffIconSvg from '../../assets/File/cloud_off_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CloudOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CloudOffIcon.Style = SvgIcon;
CloudOffIcon.displayName = 'CloudOffIcon';

export default CloudOffIcon
