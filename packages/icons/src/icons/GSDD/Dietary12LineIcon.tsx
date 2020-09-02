import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary12LineIconSvg from '../../assets/GSDD/Dietary_12_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary12LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary12LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary12LineIcon.Style = SvgIcon;
Dietary12LineIcon.displayName = 'Dietary12LineIcon';

export default Dietary12LineIcon
