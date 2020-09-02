import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary306LineIconSvg from '../../assets/GSDD/Dietary_306_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary306LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary306LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary306LineIcon.Style = SvgIcon;
Dietary306LineIcon.displayName = 'Dietary306LineIcon';

export default Dietary306LineIcon
