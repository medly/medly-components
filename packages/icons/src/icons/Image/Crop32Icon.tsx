import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Crop32IconSvg from '../../assets/Image/crop_3_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Crop32Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Crop32IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Crop32Icon.Style = SvgIcon;
Crop32Icon.displayName = 'Crop32Icon';

export default Crop32Icon
