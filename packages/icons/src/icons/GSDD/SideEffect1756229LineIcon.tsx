import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1756229LineIconSvg from '../../assets/GSDD/SideEffect_1756_229_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1756229LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1756229LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1756229LineIcon.Style = SvgIcon;
SideEffect1756229LineIcon.displayName = 'SideEffect1756229LineIcon';

export default SideEffect1756229LineIcon
