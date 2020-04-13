import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FiberNewIconSvg from '../../assets/Media/fiber_new_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberNewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FiberNewIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FiberNewIcon.Style = SvgIcon;
FiberNewIcon.displayName = 'FiberNewIcon';

export default FiberNewIcon
