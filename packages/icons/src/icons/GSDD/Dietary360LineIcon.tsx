import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary360LineIconSvg from '../../assets/GSDD/Dietary_360_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary360LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary360LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary360LineIcon.Style = SvgIcon;
Dietary360LineIcon.displayName = 'Dietary360LineIcon';

export default Dietary360LineIcon
