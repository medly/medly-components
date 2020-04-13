import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssignmentIndIconSvg from '../../assets/Action/assignment_ind_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentIndIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssignmentIndIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssignmentIndIcon.Style = SvgIcon;
AssignmentIndIcon.displayName = 'AssignmentIndIcon';

export default AssignmentIndIcon
