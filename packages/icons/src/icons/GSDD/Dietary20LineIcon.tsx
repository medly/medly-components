import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary20LineIconSvg from '../../assets/GSDD/Dietary_20_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary20LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary20LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary20LineIcon.Style = SvgIcon;
Dietary20LineIcon.displayName = 'Dietary20LineIcon';

export default Dietary20LineIcon
