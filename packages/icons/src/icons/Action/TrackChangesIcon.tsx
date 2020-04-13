import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrackChangesIconSvg from '../../assets/Action/track_changes_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrackChangesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TrackChangesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TrackChangesIcon.Style = SvgIcon;
TrackChangesIcon.displayName = 'TrackChangesIcon';

export default TrackChangesIcon
