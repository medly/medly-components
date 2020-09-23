import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect13561LineIconSvg from '../../assets/GSDD/SideEffect_1356_1_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect13561LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect13561LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect13561LineIcon.Style = SvgIcon;
SideEffect13561LineIcon.displayName = 'SideEffect13561LineIcon';

export default SideEffect13561LineIcon
