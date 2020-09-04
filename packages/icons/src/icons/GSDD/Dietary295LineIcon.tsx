import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary295LineIconSvg from '../../assets/GSDD/Dietary_295_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary295LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary295LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary295LineIcon.Style = SvgIcon;
Dietary295LineIcon.displayName = 'Dietary295LineIcon';

export default Dietary295LineIcon
