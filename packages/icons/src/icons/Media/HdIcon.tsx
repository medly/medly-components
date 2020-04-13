import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HdIconSvg from '../../assets/Media/hd_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HdIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HdIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HdIcon.Style = SvgIcon;
HdIcon.displayName = 'HdIcon';

export default HdIcon
