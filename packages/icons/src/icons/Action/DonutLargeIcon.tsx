import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DonutLargeIconSvg from '../../assets/Action/donut_large_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DonutLargeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DonutLargeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DonutLargeIcon.Style = SvgIcon;
DonutLargeIcon.displayName = 'DonutLargeIcon';

export default DonutLargeIcon
