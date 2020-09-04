import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary17LineIconSvg from '../../assets/GSDD/Dietary_17_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary17LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary17LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary17LineIcon.Style = SvgIcon;
Dietary17LineIcon.displayName = 'Dietary17LineIcon';

export default Dietary17LineIcon
