import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary22LineIconSvg from '../../assets/GSDD/Dietary_22_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary22LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary22LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary22LineIcon.Style = SvgIcon;
Dietary22LineIcon.displayName = 'Dietary22LineIcon';

export default Dietary22LineIcon
