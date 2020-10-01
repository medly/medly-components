import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3230221LineIconSvg from '../../assets/GSDD/SideEffect_3230_221_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3230221LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3230221LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3230221LineIcon.Style = SvgIcon;
SideEffect3230221LineIcon.displayName = 'SideEffect3230221LineIcon';

export default SideEffect3230221LineIcon
