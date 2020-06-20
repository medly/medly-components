import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AssignmentIconSvg from '../../assets/Action/assignment_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssignmentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssignmentIcon.Style = SvgIcon;
AssignmentIcon.displayName = 'AssignmentIcon';

export default AssignmentIcon
