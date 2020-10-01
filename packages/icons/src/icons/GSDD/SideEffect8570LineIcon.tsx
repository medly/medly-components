import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect8570LineIconSvg from '../../assets/GSDD/SideEffect_85_70_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect8570LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect8570LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect8570LineIcon.Style = SvgIcon;
SideEffect8570LineIcon.displayName = 'SideEffect8570LineIcon';

export default SideEffect8570LineIcon
