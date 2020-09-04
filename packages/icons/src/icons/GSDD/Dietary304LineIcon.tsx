import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary304LineIconSvg from '../../assets/GSDD/Dietary_304_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary304LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary304LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary304LineIcon.Style = SvgIcon;
Dietary304LineIcon.displayName = 'Dietary304LineIcon';

export default Dietary304LineIcon
