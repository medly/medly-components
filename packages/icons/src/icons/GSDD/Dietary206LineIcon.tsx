import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary206LineIconSvg from '../../assets/GSDD/Dietary_206_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary206LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary206LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary206LineIcon.Style = SvgIcon;
Dietary206LineIcon.displayName = 'Dietary206LineIcon';

export default Dietary206LineIcon
