import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect2053382LineIconSvg from '../../assets/GSDD/SideEffect_2053_382_Line._svg.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect2053382LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect2053382LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect2053382LineIcon.Style = SvgIcon;
SideEffect2053382LineIcon.displayName = 'SideEffect2053382LineIcon';

export default SideEffect2053382LineIcon
