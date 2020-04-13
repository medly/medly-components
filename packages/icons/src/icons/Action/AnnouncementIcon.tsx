import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AnnouncementIconSvg from '../../assets/Action/announcement_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AnnouncementIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AnnouncementIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AnnouncementIcon.Style = SvgIcon;
AnnouncementIcon.displayName = 'AnnouncementIcon';

export default AnnouncementIcon
