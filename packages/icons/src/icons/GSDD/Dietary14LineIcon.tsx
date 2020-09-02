import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary14LineIconSvg from '../../assets/GSDD/Dietary_14_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary14LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary14LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary14LineIcon.Style = SvgIcon;
Dietary14LineIcon.displayName = 'Dietary14LineIcon';

export default Dietary14LineIcon
