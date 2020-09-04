import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary201LineIconSvg from '../../assets/GSDD/Dietary_201_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary201LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary201LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary201LineIcon.Style = SvgIcon;
Dietary201LineIcon.displayName = 'Dietary201LineIcon';

export default Dietary201LineIcon
