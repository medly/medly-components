import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary263LineIconSvg from '../../assets/GSDD/Dietary_263_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary263LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary263LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary263LineIcon.Style = SvgIcon;
Dietary263LineIcon.displayName = 'Dietary263LineIcon';

export default Dietary263LineIcon
