import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HearingIconSvg from '../../assets/Media/hearing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HearingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HearingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HearingIcon.Style = SvgIcon;
HearingIcon.displayName = 'HearingIcon';

export default HearingIcon
