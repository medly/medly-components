import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness2IconSvg from '../../assets/Image/brightness_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness2Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Brightness2IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Brightness2Icon.Style = SvgIcon;
Brightness2Icon.displayName = 'Brightness2Icon';

export default Brightness2Icon
