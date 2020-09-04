import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary346LineIconSvg from '../../assets/GSDD/Dietary_346_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary346LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary346LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary346LineIcon.Style = SvgIcon;
Dietary346LineIcon.displayName = 'Dietary346LineIcon';

export default Dietary346LineIcon
