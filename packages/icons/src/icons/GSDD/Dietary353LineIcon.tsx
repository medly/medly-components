import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary353LineIconSvg from '../../assets/GSDD/Dietary_353_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary353LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary353LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary353LineIcon.Style = SvgIcon;
Dietary353LineIcon.displayName = 'Dietary353LineIcon';

export default Dietary353LineIcon
