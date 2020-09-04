import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary409LineIconSvg from '../../assets/GSDD/Dietary_409_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary409LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary409LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary409LineIcon.Style = SvgIcon;
Dietary409LineIcon.displayName = 'Dietary409LineIcon';

export default Dietary409LineIcon
