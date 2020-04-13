import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccessibleForwardIconSvg from '../../assets/Action/accessible_forward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessibleForwardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccessibleForwardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccessibleForwardIcon.Style = SvgIcon;
AccessibleForwardIcon.displayName = 'AccessibleForwardIcon';

export default AccessibleForwardIcon
