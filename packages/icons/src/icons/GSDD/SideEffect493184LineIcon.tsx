import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect493184LineIconSvg from '../../assets/GSDD/SideEffect_493_184_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect493184LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect493184LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect493184LineIcon.Style = SvgIcon;
SideEffect493184LineIcon.displayName = 'SideEffect493184LineIcon';

export default SideEffect493184LineIcon
