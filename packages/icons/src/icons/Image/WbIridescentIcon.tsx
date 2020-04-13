import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WbIridescentIconSvg from '../../assets/Image/wb_iridescent_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbIridescentIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WbIridescentIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WbIridescentIcon.Style = SvgIcon;
WbIridescentIcon.displayName = 'WbIridescentIcon';

export default WbIridescentIcon
