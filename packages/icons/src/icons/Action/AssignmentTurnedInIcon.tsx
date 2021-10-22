import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AssignmentTurnedInIconSvg from '../../assets/Action/assignment_turned_in_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssignmentTurnedInIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AssignmentTurnedInIcon';

const AssignmentTurnedInIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AssignmentTurnedInIcon;
