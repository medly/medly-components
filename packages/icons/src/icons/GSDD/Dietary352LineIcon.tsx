import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary352LineIconSvg from '../../assets/GSDD/Dietary_352_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary352LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary352LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary352LineIcon.Style = SvgIcon;
Dietary352LineIcon.displayName = 'Dietary352LineIcon';

export default Dietary352LineIcon
