import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary104LineIconSvg from '../../assets/GSDD/Dietary_104_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary104LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary104LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary104LineIcon.Style = SvgIcon;
Dietary104LineIcon.displayName = 'Dietary104LineIcon';

export default Dietary104LineIcon
