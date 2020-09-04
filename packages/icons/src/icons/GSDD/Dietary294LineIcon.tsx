import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary294LineIconSvg from '../../assets/GSDD/Dietary_294_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary294LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary294LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary294LineIcon.Style = SvgIcon;
Dietary294LineIcon.displayName = 'Dietary294LineIcon';

export default Dietary294LineIcon
