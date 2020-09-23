import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1413197LineIconSvg from '../../assets/GSDD/SideEffect_1413_197_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1413197LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1413197LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1413197LineIcon.Style = SvgIcon;
SideEffect1413197LineIcon.displayName = 'SideEffect1413197LineIcon';

export default SideEffect1413197LineIcon
