import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3229223LineIconSvg from '../../assets/GSDD/SideEffect_3229_223_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3229223LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3229223LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3229223LineIcon.Style = SvgIcon;
SideEffect3229223LineIcon.displayName = 'SideEffect3229223LineIcon';

export default SideEffect3229223LineIcon
