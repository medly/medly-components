import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness6IconSvg from '../../assets/Image/brightness_6_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness6Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Brightness6IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Brightness6Icon.Style = SvgIcon;
Brightness6Icon.displayName = 'Brightness6Icon';

export default Brightness6Icon
