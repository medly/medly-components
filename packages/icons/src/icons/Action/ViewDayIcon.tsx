import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewDayIconSvg from '../../assets/Action/view_day_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewDayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewDayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewDayIcon.Style = SvgIcon;
ViewDayIcon.displayName = 'ViewDayIcon';

export default ViewDayIcon
