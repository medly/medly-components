import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GroupIconSvg from '../../assets/Social/group_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GroupIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GroupIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GroupIcon.Style = SvgIcon;
GroupIcon.displayName = 'GroupIcon';

export default GroupIcon
