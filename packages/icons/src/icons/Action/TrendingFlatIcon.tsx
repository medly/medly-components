import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TrendingFlatIconSvg from '../../assets/Action/trending_flat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrendingFlatIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TrendingFlatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TrendingFlatIcon.Style = SvgIcon;
TrendingFlatIcon.displayName = 'TrendingFlatIcon';

export default TrendingFlatIcon
