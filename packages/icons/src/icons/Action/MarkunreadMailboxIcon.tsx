import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MarkunreadMailboxIconSvg from '../../assets/Action/markunread_mailbox_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MarkunreadMailboxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MarkunreadMailboxIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MarkunreadMailboxIcon.Style = SvgIcon;
MarkunreadMailboxIcon.displayName = 'MarkunreadMailboxIcon';

export default MarkunreadMailboxIcon
