import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AssignmentReturnIconSvg from '../../assets/Action/assignment_return_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssignmentReturnIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssignmentReturnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssignmentReturnIcon.Style = SvgIcon;
AssignmentReturnIcon.displayName = 'AssignmentReturnIcon';

export default AssignmentReturnIcon
