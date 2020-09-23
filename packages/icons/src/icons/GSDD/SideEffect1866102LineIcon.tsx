import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1866102LineIconSvg from '../../assets/GSDD/SideEffect_1866_102_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1866102LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1866102LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1866102LineIcon.Style = SvgIcon;
SideEffect1866102LineIcon.displayName = 'SideEffect1866102LineIcon';

export default SideEffect1866102LineIcon
