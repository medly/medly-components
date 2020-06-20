import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AccessibilityIconSvg from '../../assets/Action/accessibility_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessibilityIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccessibilityIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccessibilityIcon.Style = SvgIcon;
AccessibilityIcon.displayName = 'AccessibilityIcon';

export default AccessibilityIcon
