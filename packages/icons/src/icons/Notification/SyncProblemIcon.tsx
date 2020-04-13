import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SyncProblemIconSvg from '../../assets/Notification/sync_problem_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SyncProblemIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SyncProblemIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SyncProblemIcon.Style = SvgIcon;
SyncProblemIcon.displayName = 'SyncProblemIcon';

export default SyncProblemIcon
