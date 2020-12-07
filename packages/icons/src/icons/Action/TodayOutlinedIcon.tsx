import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TodayOutlinedIconSvg from '../../assets/Action/today_outlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TodayOutlinedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TodayOutlinedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TodayOutlinedIcon.Style = SvgIcon;
TodayOutlinedIcon.displayName = 'TodayOutlinedIcon';

export default TodayOutlinedIcon
