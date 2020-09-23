import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1610318LineIconSvg from '../../assets/GSDD/SideEffect_1610_318_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1610318LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1610318LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1610318LineIcon.Style = SvgIcon;
SideEffect1610318LineIcon.displayName = 'SideEffect1610318LineIcon';

export default SideEffect1610318LineIcon
