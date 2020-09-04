import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary303LineIconSvg from '../../assets/GSDD/Dietary_303_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary303LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary303LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary303LineIcon.Style = SvgIcon;
Dietary303LineIcon.displayName = 'Dietary303LineIcon';

export default Dietary303LineIcon
