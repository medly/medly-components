import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary275LineIconSvg from '../../assets/GSDD/Dietary_275_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary275LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary275LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary275LineIcon.Style = SvgIcon;
Dietary275LineIcon.displayName = 'Dietary275LineIcon';

export default Dietary275LineIcon
