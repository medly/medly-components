import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary182LineIconSvg from '../../assets/GSDD/Dietary_182_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary182LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary182LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary182LineIcon.Style = SvgIcon;
Dietary182LineIcon.displayName = 'Dietary182LineIcon';

export default Dietary182LineIcon
