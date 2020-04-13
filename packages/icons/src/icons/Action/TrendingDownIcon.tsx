import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrendingDownIconSvg from '../../assets/Action/trending_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrendingDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TrendingDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TrendingDownIcon.Style = SvgIcon;
TrendingDownIcon.displayName = 'TrendingDownIcon';

export default TrendingDownIcon
