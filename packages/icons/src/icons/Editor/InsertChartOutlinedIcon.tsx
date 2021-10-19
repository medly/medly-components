import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InsertChartOutlinedIconSvg from '../../assets/Editor/insert_chart_outlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertChartOutlinedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'InsertChartOutlinedIcon';

const InsertChartOutlinedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default InsertChartOutlinedIcon;
