import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary199LineIconSvg from '../../assets/GSDD/Dietary_199_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary199LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary199LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary199LineIcon.Style = SvgIcon;
Dietary199LineIcon.displayName = 'Dietary199LineIcon';

export default Dietary199LineIcon
