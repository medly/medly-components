import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary13LineIconSvg from '../../assets/GSDD/Dietary_13_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary13LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary13LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary13LineIcon.Style = SvgIcon;
Dietary13LineIcon.displayName = 'Dietary13LineIcon';

export default Dietary13LineIcon
