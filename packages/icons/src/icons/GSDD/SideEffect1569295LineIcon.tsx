import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1569295LineIconSvg from '../../assets/GSDD/SideEffect_1569_295_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1569295LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1569295LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1569295LineIcon.Style = SvgIcon;
SideEffect1569295LineIcon.displayName = 'SideEffect1569295LineIcon';

export default SideEffect1569295LineIcon
