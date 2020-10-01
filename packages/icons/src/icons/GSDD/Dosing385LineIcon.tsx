import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dosing385LineIconSvg from '../../assets/GSDD/Dosing_385_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dosing385LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dosing385LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dosing385LineIcon.Style = SvgIcon;
Dosing385LineIcon.displayName = 'Dosing385LineIcon';

export default Dosing385LineIcon
