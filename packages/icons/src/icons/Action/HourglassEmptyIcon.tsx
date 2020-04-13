import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HourglassEmptyIconSvg from '../../assets/Action/hourglass_empty_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HourglassEmptyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HourglassEmptyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HourglassEmptyIcon.Style = SvgIcon;
HourglassEmptyIcon.displayName = 'HourglassEmptyIcon';

export default HourglassEmptyIcon
