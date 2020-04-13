import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HdrOffIconSvg from '../../assets/Image/hdr_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HdrOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HdrOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HdrOffIcon.Style = SvgIcon;
HdrOffIcon.displayName = 'HdrOffIcon';

export default HdrOffIcon
