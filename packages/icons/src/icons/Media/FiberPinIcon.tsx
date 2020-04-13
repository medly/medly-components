import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FiberPinIconSvg from '../../assets/Media/fiber_pin_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberPinIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FiberPinIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FiberPinIcon.Style = SvgIcon;
FiberPinIcon.displayName = 'FiberPinIcon';

export default FiberPinIcon
