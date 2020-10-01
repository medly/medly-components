import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1709305LineIconSvg from '../../assets/GSDD/SideEffect_1709_305_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1709305LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1709305LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1709305LineIcon.Style = SvgIcon;
SideEffect1709305LineIcon.displayName = 'SideEffect1709305LineIcon';

export default SideEffect1709305LineIcon
