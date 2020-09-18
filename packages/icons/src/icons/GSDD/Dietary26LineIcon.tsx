import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary26LineIconSvg from '../../assets/GSDD/Dietary_26_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary26LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary26LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary26LineIcon.Style = SvgIcon;
Dietary26LineIcon.displayName = 'Dietary26LineIcon';

export default Dietary26LineIcon
