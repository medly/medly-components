import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AppsIconSvg from '../../assets/Navigation/apps_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AppsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AppsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AppsIcon.Style = SvgIcon;
AppsIcon.displayName = 'AppsIcon';

export default AppsIcon
