import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary239LineIconSvg from '../../assets/GSDD/Dietary_239_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary239LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary239LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary239LineIcon.Style = SvgIcon;
Dietary239LineIcon.displayName = 'Dietary239LineIcon';

export default Dietary239LineIcon
