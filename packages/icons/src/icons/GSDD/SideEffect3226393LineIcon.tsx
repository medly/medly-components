import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3226393LineIconSvg from '../../assets/GSDD/SideEffect_3226_393_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3226393LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3226393LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3226393LineIcon.Style = SvgIcon;
SideEffect3226393LineIcon.displayName = 'SideEffect3226393LineIcon';

export default SideEffect3226393LineIcon
