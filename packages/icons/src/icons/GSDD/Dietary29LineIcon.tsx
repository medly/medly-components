import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary29LineIconSvg from '../../assets/GSDD/Dietary_29_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary29LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary29LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary29LineIcon.Style = SvgIcon;
Dietary29LineIcon.displayName = 'Dietary29LineIcon';

export default Dietary29LineIcon
