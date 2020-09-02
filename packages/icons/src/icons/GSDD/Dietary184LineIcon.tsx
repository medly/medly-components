import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary184LineIconSvg from '../../assets/GSDD/Dietary_184_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary184LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary184LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary184LineIcon.Style = SvgIcon;
Dietary184LineIcon.displayName = 'Dietary184LineIcon';

export default Dietary184LineIcon
