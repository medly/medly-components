import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HourglassEmptyIconSvg from '../../assets/Action/hourglass_empty_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HourglassEmptyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HourglassEmptyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HourglassEmptyIcon.Style = SvgIcon;
HourglassEmptyIcon.displayName = 'HourglassEmptyIcon';

export default HourglassEmptyIcon
