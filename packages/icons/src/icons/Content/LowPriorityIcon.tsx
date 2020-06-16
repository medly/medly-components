import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LowPriorityIconSvg from '../../assets/Content/low_priority_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LowPriorityIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LowPriorityIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LowPriorityIcon.Style = SvgIcon;
LowPriorityIcon.displayName = 'LowPriorityIcon';

export default LowPriorityIcon
