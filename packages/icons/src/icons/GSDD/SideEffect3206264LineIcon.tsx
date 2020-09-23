import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3206264LineIconSvg from '../../assets/GSDD/SideEffect_3206_264_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3206264LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3206264LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3206264LineIcon.Style = SvgIcon;
SideEffect3206264LineIcon.displayName = 'SideEffect3206264LineIcon';

export default SideEffect3206264LineIcon
