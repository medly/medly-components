import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ShowChartIconSvg from '../../assets/Editor/show_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShowChartIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShowChartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShowChartIcon.Style = SvgIcon;
ShowChartIcon.displayName = 'ShowChartIcon';

export default ShowChartIcon
