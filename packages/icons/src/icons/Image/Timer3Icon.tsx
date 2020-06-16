import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Timer3IconSvg from '../../assets/Image/timer_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Timer3Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Timer3IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Timer3Icon.Style = SvgIcon;
Timer3Icon.displayName = 'Timer3Icon';

export default Timer3Icon
