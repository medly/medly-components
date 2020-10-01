import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect162256LineIconSvg from '../../assets/GSDD/SideEffect_1622_56_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect162256LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect162256LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect162256LineIcon.Style = SvgIcon;
SideEffect162256LineIcon.displayName = 'SideEffect162256LineIcon';

export default SideEffect162256LineIcon
