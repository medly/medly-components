import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GroupWorkIconSvg from '../../assets/Action/group_work_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GroupWorkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GroupWorkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GroupWorkIcon.Style = SvgIcon;
GroupWorkIcon.displayName = 'GroupWorkIcon';

export default GroupWorkIcon
