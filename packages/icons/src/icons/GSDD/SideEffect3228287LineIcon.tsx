import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3228287LineIconSvg from '../../assets/GSDD/SideEffect_3228_287_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3228287LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3228287LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3228287LineIcon.Style = SvgIcon;
SideEffect3228287LineIcon.displayName = 'SideEffect3228287LineIcon';

export default SideEffect3228287LineIcon
