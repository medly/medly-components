import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OndemandVideoIconSvg from '../../assets/Notification/ondemand_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OndemandVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OndemandVideoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OndemandVideoIcon.Style = SvgIcon;
OndemandVideoIcon.displayName = 'OndemandVideoIcon';

export default OndemandVideoIcon
