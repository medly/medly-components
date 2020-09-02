import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary314LineIconSvg from '../../assets/GSDD/Dietary_314_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary314LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary314LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary314LineIcon.Style = SvgIcon;
Dietary314LineIcon.displayName = 'Dietary314LineIcon';

export default Dietary314LineIcon
