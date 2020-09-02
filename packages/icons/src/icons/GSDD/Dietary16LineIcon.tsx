import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary16LineIconSvg from '../../assets/GSDD/Dietary_16_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary16LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary16LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary16LineIcon.Style = SvgIcon;
Dietary16LineIcon.displayName = 'Dietary16LineIcon';

export default Dietary16LineIcon
