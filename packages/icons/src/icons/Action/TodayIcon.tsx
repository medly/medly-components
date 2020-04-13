import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TodayIconSvg from '../../assets/Action/today_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TodayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TodayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TodayIcon.Style = SvgIcon;
TodayIcon.displayName = 'TodayIcon';

export default TodayIcon
