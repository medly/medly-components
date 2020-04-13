import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LaptopMacIconSvg from '../../assets/Hardware/laptop_mac_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LaptopMacIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LaptopMacIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LaptopMacIcon.Style = SvgIcon;
LaptopMacIcon.displayName = 'LaptopMacIcon';

export default LaptopMacIcon
