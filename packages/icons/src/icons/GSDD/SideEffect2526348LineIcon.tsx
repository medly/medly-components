import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect2526348LineIconSvg from '../../assets/GSDD/SideEffect_2526_348_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect2526348LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect2526348LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect2526348LineIcon.Style = SvgIcon;
SideEffect2526348LineIcon.displayName = 'SideEffect2526348LineIcon';

export default SideEffect2526348LineIcon
