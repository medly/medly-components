import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect100621LineIconSvg from '../../assets/GSDD/SideEffect_1006_21_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect100621LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect100621LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect100621LineIcon.Style = SvgIcon;
SideEffect100621LineIcon.displayName = 'SideEffect100621LineIcon';

export default SideEffect100621LineIcon
