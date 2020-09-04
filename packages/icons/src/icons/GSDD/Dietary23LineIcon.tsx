import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary23LineIconSvg from '../../assets/GSDD/Dietary_23_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary23LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary23LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary23LineIcon.Style = SvgIcon;
Dietary23LineIcon.displayName = 'Dietary23LineIcon';

export default Dietary23LineIcon
