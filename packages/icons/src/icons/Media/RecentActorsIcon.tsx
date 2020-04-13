import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RecentActorsIconSvg from '../../assets/Media/recent_actors_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RecentActorsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RecentActorsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RecentActorsIcon.Style = SvgIcon;
RecentActorsIcon.displayName = 'RecentActorsIcon';

export default RecentActorsIcon
