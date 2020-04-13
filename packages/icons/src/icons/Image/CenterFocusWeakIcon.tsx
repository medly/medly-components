import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CenterFocusWeakIconSvg from '../../assets/Image/center_focus_weak_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CenterFocusWeakIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CenterFocusWeakIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CenterFocusWeakIcon.Style = SvgIcon;
CenterFocusWeakIcon.displayName = 'CenterFocusWeakIcon';

export default CenterFocusWeakIcon
