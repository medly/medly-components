import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect3205164LineIconSvg from '../../assets/GSDD/SideEffect_3205_164_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect3205164LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect3205164LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect3205164LineIcon.Style = SvgIcon;
SideEffect3205164LineIcon.displayName = 'SideEffect3205164LineIcon';

export default SideEffect3205164LineIcon
