import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dosing138LineIconSvg from '../../assets/GSDD/Dosing_138_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dosing138LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dosing138LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dosing138LineIcon.Style = SvgIcon;
Dosing138LineIcon.displayName = 'Dosing138LineIcon';

export default Dosing138LineIcon
