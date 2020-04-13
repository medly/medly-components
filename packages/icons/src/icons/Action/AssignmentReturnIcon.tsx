import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssignmentReturnIconSvg from '../../assets/Action/assignment_return_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentReturnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AssignmentReturnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AssignmentReturnIcon.Style = SvgIcon;
AssignmentReturnIcon.displayName = 'AssignmentReturnIcon';

export default AssignmentReturnIcon
