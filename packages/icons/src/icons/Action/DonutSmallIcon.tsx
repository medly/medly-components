import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DonutSmallIconSvg from '../../assets/Action/donut_small_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DonutSmallIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DonutSmallIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DonutSmallIcon.Style = SvgIcon;
DonutSmallIcon.displayName = 'DonutSmallIcon';

export default DonutSmallIcon
