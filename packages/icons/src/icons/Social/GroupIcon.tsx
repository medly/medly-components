import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GroupIconSvg from '../../assets/Social/group_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GroupIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GroupIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GroupIcon.Style = SvgIcon;
GroupIcon.displayName = 'GroupIcon';

export default GroupIcon
