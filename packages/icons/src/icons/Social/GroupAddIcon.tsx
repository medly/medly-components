import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GroupAddIconSvg from '../../assets/Social/group_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GroupAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GroupAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GroupAddIcon.Style = SvgIcon;
GroupAddIcon.displayName = 'GroupAddIcon';

export default GroupAddIcon
