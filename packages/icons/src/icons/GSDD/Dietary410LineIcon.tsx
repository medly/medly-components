import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary410LineIconSvg from '../../assets/GSDD/Dietary_410_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary410LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary410LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary410LineIcon.Style = SvgIcon;
Dietary410LineIcon.displayName = 'Dietary410LineIcon';

export default Dietary410LineIcon
