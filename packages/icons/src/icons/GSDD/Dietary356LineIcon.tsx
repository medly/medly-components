import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary356LineIconSvg from '../../assets/GSDD/Dietary_356_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary356LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary356LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary356LineIcon.Style = SvgIcon;
Dietary356LineIcon.displayName = 'Dietary356LineIcon';

export default Dietary356LineIcon
