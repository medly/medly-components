import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary284LineIconSvg from '../../assets/GSDD/Dietary_284_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary284LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary284LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary284LineIcon.Style = SvgIcon;
Dietary284LineIcon.displayName = 'Dietary284LineIcon';

export default Dietary284LineIcon
