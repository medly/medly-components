import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1665250LineIconSvg from '../../assets/GSDD/SideEffect_1665_250_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1665250LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1665250LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1665250LineIcon.Style = SvgIcon;
SideEffect1665250LineIcon.displayName = 'SideEffect1665250LineIcon';

export default SideEffect1665250LineIcon
