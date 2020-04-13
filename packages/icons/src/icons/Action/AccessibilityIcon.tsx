import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccessibilityIconSvg from '../../assets/Action/accessibility_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessibilityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccessibilityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccessibilityIcon.Style = SvgIcon;
AccessibilityIcon.displayName = 'AccessibilityIcon';

export default AccessibilityIcon
