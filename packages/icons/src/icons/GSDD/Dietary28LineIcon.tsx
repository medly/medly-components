import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary28LineIconSvg from '../../assets/GSDD/Dietary_28_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary28LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary28LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary28LineIcon.Style = SvgIcon;
Dietary28LineIcon.displayName = 'Dietary28LineIcon';

export default Dietary28LineIcon
