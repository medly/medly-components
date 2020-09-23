import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect15222LineIconSvg from '../../assets/GSDD/SideEffect_15_222_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect15222LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect15222LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect15222LineIcon.Style = SvgIcon;
SideEffect15222LineIcon.displayName = 'SideEffect15222LineIcon';

export default SideEffect15222LineIcon
