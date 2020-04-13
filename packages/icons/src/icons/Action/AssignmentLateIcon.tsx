import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssignmentLateIconSvg from '../../assets/Action/assignment_late_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentLateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AssignmentLateIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AssignmentLateIcon.Style = SvgIcon;
AssignmentLateIcon.displayName = 'AssignmentLateIcon';

export default AssignmentLateIcon
