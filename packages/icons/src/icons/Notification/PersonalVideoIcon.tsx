import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonalVideoIconSvg from '../../assets/Notification/personal_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonalVideoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PersonalVideoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PersonalVideoIcon.Style = SvgIcon;
PersonalVideoIcon.displayName = 'PersonalVideoIcon';

export default PersonalVideoIcon
