import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect316208LineIconSvg from '../../assets/GSDD/SideEffect_316_208_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect316208LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect316208LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect316208LineIcon.Style = SvgIcon;
SideEffect316208LineIcon.displayName = 'SideEffect316208LineIcon';

export default SideEffect316208LineIcon
