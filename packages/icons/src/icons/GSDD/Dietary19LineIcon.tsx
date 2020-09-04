import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary19LineIconSvg from '../../assets/GSDD/Dietary_19_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary19LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary19LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary19LineIcon.Style = SvgIcon;
Dietary19LineIcon.displayName = 'Dietary19LineIcon';

export default Dietary19LineIcon
