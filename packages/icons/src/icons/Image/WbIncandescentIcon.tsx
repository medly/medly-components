import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WbIncandescentIconSvg from '../../assets/Image/wb_incandescent_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbIncandescentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WbIncandescentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WbIncandescentIcon.Style = SvgIcon;
WbIncandescentIcon.displayName = 'WbIncandescentIcon';

export default WbIncandescentIcon
