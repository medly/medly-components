import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary402LineIconSvg from '../../assets/GSDD/Dietary_402_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary402LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary402LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary402LineIcon.Style = SvgIcon;
Dietary402LineIcon.displayName = 'Dietary402LineIcon';

export default Dietary402LineIcon
