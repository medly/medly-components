import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1206371LineIconSvg from '../../assets/GSDD/SideEffect_1206_371_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1206371LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1206371LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1206371LineIcon.Style = SvgIcon;
SideEffect1206371LineIcon.displayName = 'SideEffect1206371LineIcon';

export default SideEffect1206371LineIcon
