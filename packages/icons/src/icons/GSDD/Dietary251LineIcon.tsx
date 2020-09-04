import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary251LineIconSvg from '../../assets/GSDD/Dietary_251_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary251LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary251LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary251LineIcon.Style = SvgIcon;
Dietary251LineIcon.displayName = 'Dietary251LineIcon';

export default Dietary251LineIcon
