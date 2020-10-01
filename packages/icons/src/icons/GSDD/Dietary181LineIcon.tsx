import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary181LineIconSvg from '../../assets/GSDD/Dietary_181_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary181LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary181LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary181LineIcon.Style = SvgIcon;
Dietary181LineIcon.displayName = 'Dietary181LineIcon';

export default Dietary181LineIcon
