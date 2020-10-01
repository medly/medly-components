import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary374LineIconSvg from '../../assets/GSDD/Dietary_374_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary374LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary374LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary374LineIcon.Style = SvgIcon;
Dietary374LineIcon.displayName = 'Dietary374LineIcon';

export default Dietary374LineIcon
