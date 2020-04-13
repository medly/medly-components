import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WorkOffIconSvg from '../../assets/Action/work_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WorkOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WorkOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WorkOffIcon.Style = SvgIcon;
WorkOffIcon.displayName = 'WorkOffIcon';

export default WorkOffIcon
