import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewWeekIconSvg from '../../assets/Action/view_week_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewWeekIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewWeekIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewWeekIcon.Style = SvgIcon;
ViewWeekIcon.displayName = 'ViewWeekIcon';

export default ViewWeekIcon
