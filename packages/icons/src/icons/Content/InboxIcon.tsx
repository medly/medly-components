import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InboxIconSvg from '../../assets/Content/inbox_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InboxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InboxIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InboxIcon.Style = SvgIcon;
InboxIcon.displayName = 'InboxIcon';

export default InboxIcon
