import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dosing363LineIconSvg from '../../assets/GSDD/Dosing_363_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dosing363LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dosing363LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dosing363LineIcon.Style = SvgIcon;
Dosing363LineIcon.displayName = 'Dosing363LineIcon';

export default Dosing363LineIcon
