import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1744272LineIconSvg from '../../assets/GSDD/SideEffect_1744_272_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1744272LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1744272LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1744272LineIcon.Style = SvgIcon;
SideEffect1744272LineIcon.displayName = 'SideEffect1744272LineIcon';

export default SideEffect1744272LineIcon
