import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TrendingUpIconSvg from '../../assets/Action/trending_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrendingUpIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TrendingUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TrendingUpIcon.Style = SvgIcon;
TrendingUpIcon.displayName = 'TrendingUpIcon';

export default TrendingUpIcon
