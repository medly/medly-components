import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary305LineIconSvg from '../../assets/GSDD/Dietary_305_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary305LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary305LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary305LineIcon.Style = SvgIcon;
Dietary305LineIcon.displayName = 'Dietary305LineIcon';

export default Dietary305LineIcon
