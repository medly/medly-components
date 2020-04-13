import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccessibilityNewIconSvg from '../../assets/Action/accessibility_new_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessibilityNewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccessibilityNewIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccessibilityNewIcon.Style = SvgIcon;
AccessibilityNewIcon.displayName = 'AccessibilityNewIcon';

export default AccessibilityNewIcon
