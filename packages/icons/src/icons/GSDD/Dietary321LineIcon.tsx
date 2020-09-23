import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary321LineIconSvg from '../../assets/GSDD/Dietary_321_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary321LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary321LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary321LineIcon.Style = SvgIcon;
Dietary321LineIcon.displayName = 'Dietary321LineIcon';

export default Dietary321LineIcon
