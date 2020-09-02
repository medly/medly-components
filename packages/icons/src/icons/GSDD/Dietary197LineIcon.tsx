import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary197LineIconSvg from '../../assets/GSDD/Dietary_197_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary197LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary197LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary197LineIcon.Style = SvgIcon;
Dietary197LineIcon.displayName = 'Dietary197LineIcon';

export default Dietary197LineIcon
