import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness4IconSvg from '../../assets/Image/brightness_4_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness4Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Brightness4IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Brightness4Icon.Style = SvgIcon;
Brightness4Icon.displayName = 'Brightness4Icon';

export default Brightness4Icon
