import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3238404LineIconSvg from '../../assets/GSDD/SideEffect_3238_404_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3238404LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3238404LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3238404LineIcon.Style = SvgIcon;
SideEffect3238404LineIcon.displayName = 'SideEffect3238404LineIcon';

export default SideEffect3238404LineIcon
