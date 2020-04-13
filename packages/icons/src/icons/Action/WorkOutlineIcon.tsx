import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WorkOutlineIconSvg from '../../assets/Action/work_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WorkOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WorkOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WorkOutlineIcon.Style = SvgIcon;
WorkOutlineIcon.displayName = 'WorkOutlineIcon';

export default WorkOutlineIcon
