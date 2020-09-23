import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect529416LineIconSvg from '../../assets/GSDD/SideEffect_529_416_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect529416LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect529416LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect529416LineIcon.Style = SvgIcon;
SideEffect529416LineIcon.displayName = 'SideEffect529416LineIcon';

export default SideEffect529416LineIcon
