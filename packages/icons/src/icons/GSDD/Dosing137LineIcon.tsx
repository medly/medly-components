import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dosing137LineIconSvg from '../../assets/GSDD/Dosing_137_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dosing137LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dosing137LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dosing137LineIcon.Style = SvgIcon;
Dosing137LineIcon.displayName = 'Dosing137LineIcon';

export default Dosing137LineIcon
