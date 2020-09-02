import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dosing132LineIconSvg from '../../assets/GSDD/Dosing_132_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dosing132LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dosing132LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dosing132LineIcon.Style = SvgIcon;
Dosing132LineIcon.displayName = 'Dosing132LineIcon';

export default Dosing132LineIcon
