import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary357LineIconSvg from '../../assets/GSDD/Dietary_357_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary357LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary357LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary357LineIcon.Style = SvgIcon;
Dietary357LineIcon.displayName = 'Dietary357LineIcon';

export default Dietary357LineIcon
