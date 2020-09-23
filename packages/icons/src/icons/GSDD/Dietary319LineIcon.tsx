import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary319LineIconSvg from '../../assets/GSDD/Dietary_319_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary319LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary319LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary319LineIcon.Style = SvgIcon;
Dietary319LineIcon.displayName = 'Dietary319LineIcon';

export default Dietary319LineIcon
