import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChildFriendlyIconSvg from '../../assets/Places/child_friendly_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChildFriendlyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChildFriendlyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChildFriendlyIcon.Style = SvgIcon;
ChildFriendlyIcon.displayName = 'ChildFriendlyIcon';

export default ChildFriendlyIcon
