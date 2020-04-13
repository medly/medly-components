import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GroupWorkIconSvg from '../../assets/Action/group_work_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GroupWorkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GroupWorkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GroupWorkIcon.Style = SvgIcon;
GroupWorkIcon.displayName = 'GroupWorkIcon';

export default GroupWorkIcon
