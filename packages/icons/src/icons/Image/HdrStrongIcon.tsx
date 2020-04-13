import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HdrStrongIconSvg from '../../assets/Image/hdr_strong_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HdrStrongIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HdrStrongIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HdrStrongIcon.Style = SvgIcon;
HdrStrongIcon.displayName = 'HdrStrongIcon';

export default HdrStrongIcon
