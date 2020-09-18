import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Caution77LineIconSvg from '../../assets/GSDD/Caution_77_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Caution77LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Caution77LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Caution77LineIcon.Style = SvgIcon;
Caution77LineIcon.displayName = 'Caution77LineIcon';

export default Caution77LineIcon
