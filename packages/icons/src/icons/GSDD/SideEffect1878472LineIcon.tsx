import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1878472LineIconSvg from '../../assets/GSDD/SideEffect_1878_472_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1878472LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1878472LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1878472LineIcon.Style = SvgIcon;
SideEffect1878472LineIcon.displayName = 'SideEffect1878472LineIcon';

export default SideEffect1878472LineIcon
