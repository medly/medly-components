import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary313LineIconSvg from '../../assets/GSDD/Dietary_313_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary313LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary313LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary313LineIcon.Style = SvgIcon;
Dietary313LineIcon.displayName = 'Dietary313LineIcon';

export default Dietary313LineIcon
