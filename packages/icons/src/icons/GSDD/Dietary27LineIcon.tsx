import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary27LineIconSvg from '../../assets/GSDD/Dietary_27_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary27LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary27LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary27LineIcon.Style = SvgIcon;
Dietary27LineIcon.displayName = 'Dietary27LineIcon';

export default Dietary27LineIcon
