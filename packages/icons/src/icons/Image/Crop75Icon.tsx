import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Crop75IconSvg from '../../assets/Image/crop_7_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Crop75Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Crop75IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Crop75Icon.Style = SvgIcon;
Crop75Icon.displayName = 'Crop75Icon';

export default Crop75Icon
