import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PriorityHighIconSvg from '../../assets/Notification/priority_high_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PriorityHighIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PriorityHighIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PriorityHighIcon.Style = SvgIcon;
PriorityHighIcon.displayName = 'PriorityHighIcon';

export default PriorityHighIcon
