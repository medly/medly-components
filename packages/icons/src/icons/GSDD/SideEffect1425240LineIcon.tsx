import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1425240LineIconSvg from '../../assets/GSDD/SideEffect_1425_240_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1425240LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1425240LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1425240LineIcon.Style = SvgIcon;
SideEffect1425240LineIcon.displayName = 'SideEffect1425240LineIcon';

export default SideEffect1425240LineIcon
