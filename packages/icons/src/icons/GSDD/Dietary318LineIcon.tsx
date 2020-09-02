import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary318LineIconSvg from '../../assets/GSDD/Dietary_318_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary318LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary318LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary318LineIcon.Style = SvgIcon;
Dietary318LineIcon.displayName = 'Dietary318LineIcon';

export default Dietary318LineIcon
