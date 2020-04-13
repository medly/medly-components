import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssignmentReturnedIconSvg from '../../assets/Action/assignment_returned_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentReturnedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssignmentReturnedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssignmentReturnedIcon.Style = SvgIcon;
AssignmentReturnedIcon.displayName = 'AssignmentReturnedIcon';

export default AssignmentReturnedIcon
