import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary198LineIconSvg from '../../assets/GSDD/Dietary_198_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary198LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary198LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary198LineIcon.Style = SvgIcon;
Dietary198LineIcon.displayName = 'Dietary198LineIcon';

export default Dietary198LineIcon
