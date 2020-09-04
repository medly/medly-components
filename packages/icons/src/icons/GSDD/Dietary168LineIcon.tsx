import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary168LineIconSvg from '../../assets/GSDD/Dietary_168_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary168LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary168LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary168LineIcon.Style = SvgIcon;
Dietary168LineIcon.displayName = 'Dietary168LineIcon';

export default Dietary168LineIcon
