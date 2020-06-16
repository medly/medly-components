import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LineWeightIconSvg from '../../assets/Action/line_weight_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LineWeightIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LineWeightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LineWeightIcon.Style = SvgIcon;
LineWeightIcon.displayName = 'LineWeightIcon';

export default LineWeightIcon
