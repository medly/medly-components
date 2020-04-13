import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssignmentTurnedInIconSvg from '../../assets/Action/assignment_turned_in_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentTurnedInIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssignmentTurnedInIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssignmentTurnedInIcon.Style = SvgIcon;
AssignmentTurnedInIcon.displayName = 'AssignmentTurnedInIcon';

export default AssignmentTurnedInIcon
