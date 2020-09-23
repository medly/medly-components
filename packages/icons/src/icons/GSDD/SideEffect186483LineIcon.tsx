import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect186483LineIconSvg from '../../assets/GSDD/SideEffect_1864_83_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect186483LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect186483LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect186483LineIcon.Style = SvgIcon;
SideEffect186483LineIcon.displayName = 'SideEffect186483LineIcon';

export default SideEffect186483LineIcon
