import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GroupAddIconSvg from '../../assets/Social/group_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GroupAddIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GroupAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GroupAddIcon.Style = SvgIcon;
GroupAddIcon.displayName = 'GroupAddIcon';

export default GroupAddIcon
