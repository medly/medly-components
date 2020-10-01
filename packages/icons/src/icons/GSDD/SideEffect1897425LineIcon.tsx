import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1897425LineIconSvg from '../../assets/GSDD/SideEffect_1897_425_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1897425LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1897425LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1897425LineIcon.Style = SvgIcon;
SideEffect1897425LineIcon.displayName = 'SideEffect1897425LineIcon';

export default SideEffect1897425LineIcon
