import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary200LineIconSvg from '../../assets/GSDD/Dietary_200_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary200LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary200LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary200LineIcon.Style = SvgIcon;
Dietary200LineIcon.displayName = 'Dietary200LineIcon';

export default Dietary200LineIcon
