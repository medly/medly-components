import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness1IconSvg from '../../assets/Image/brightness_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness1Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Brightness1IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Brightness1Icon.Style = SvgIcon;
Brightness1Icon.displayName = 'Brightness1Icon';

export default Brightness1Icon
