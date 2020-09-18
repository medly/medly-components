import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary354LineIconSvg from '../../assets/GSDD/Dietary_354_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary354LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary354LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary354LineIcon.Style = SvgIcon;
Dietary354LineIcon.displayName = 'Dietary354LineIcon';

export default Dietary354LineIcon
