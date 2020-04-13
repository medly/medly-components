import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssignmentIconSvg from '../../assets/Action/assignment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AssignmentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AssignmentIcon.Style = SvgIcon;
AssignmentIcon.displayName = 'AssignmentIcon';

export default AssignmentIcon
