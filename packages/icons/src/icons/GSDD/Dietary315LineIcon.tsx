import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary315LineIconSvg from '../../assets/GSDD/Dietary_315_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary315LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary315LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary315LineIcon.Style = SvgIcon;
Dietary315LineIcon.displayName = 'Dietary315LineIcon';

export default Dietary315LineIcon
