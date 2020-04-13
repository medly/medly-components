import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CenterFocusStrongIconSvg from '../../assets/Image/center_focus_strong_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CenterFocusStrongIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CenterFocusStrongIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CenterFocusStrongIcon.Style = SvgIcon;
CenterFocusStrongIcon.displayName = 'CenterFocusStrongIcon';

export default CenterFocusStrongIcon
