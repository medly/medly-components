import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary186LineIconSvg from '../../assets/GSDD/Dietary_186_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary186LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary186LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary186LineIcon.Style = SvgIcon;
Dietary186LineIcon.displayName = 'Dietary186LineIcon';

export default Dietary186LineIcon
