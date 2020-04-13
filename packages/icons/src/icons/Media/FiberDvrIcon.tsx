import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FiberDvrIconSvg from '../../assets/Media/fiber_dvr_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberDvrIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FiberDvrIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FiberDvrIcon.Style = SvgIcon;
FiberDvrIcon.displayName = 'FiberDvrIcon';

export default FiberDvrIcon
