import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Timer3IconSvg from '../../assets/Image/timer_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Timer3Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Timer3IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Timer3Icon.Style = SvgIcon;
Timer3Icon.displayName = 'Timer3Icon';

export default Timer3Icon
