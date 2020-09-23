import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary244LineIconSvg from '../../assets/GSDD/Dietary_244_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary244LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary244LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary244LineIcon.Style = SvgIcon;
Dietary244LineIcon.displayName = 'Dietary244LineIcon';

export default Dietary244LineIcon
