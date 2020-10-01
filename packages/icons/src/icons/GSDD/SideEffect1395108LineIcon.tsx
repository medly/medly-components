import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1395108LineIconSvg from '../../assets/GSDD/SideEffect_1395_108_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1395108LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1395108LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1395108LineIcon.Style = SvgIcon;
SideEffect1395108LineIcon.displayName = 'SideEffect1395108LineIcon';

export default SideEffect1395108LineIcon
