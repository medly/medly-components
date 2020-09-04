import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary230LineIconSvg from '../../assets/GSDD/Dietary_230_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary230LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary230LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary230LineIcon.Style = SvgIcon;
Dietary230LineIcon.displayName = 'Dietary230LineIcon';

export default Dietary230LineIcon
