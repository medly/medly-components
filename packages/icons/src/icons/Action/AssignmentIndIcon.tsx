import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssignmentIndIconSvg from '../../assets/Action/assignment_ind_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentIndIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AssignmentIndIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AssignmentIndIcon.Style = SvgIcon;
AssignmentIndIcon.displayName = 'AssignmentIndIcon';

export default AssignmentIndIcon
