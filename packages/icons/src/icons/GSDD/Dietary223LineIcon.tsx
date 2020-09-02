import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary223LineIconSvg from '../../assets/GSDD/Dietary_223_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary223LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary223LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary223LineIcon.Style = SvgIcon;
Dietary223LineIcon.displayName = 'Dietary223LineIcon';

export default Dietary223LineIcon
