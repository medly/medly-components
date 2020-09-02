import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning248LineIconSvg from '../../assets/GSDD/Warning_248_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning248LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning248LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning248LineIcon.Style = SvgIcon;
Warning248LineIcon.displayName = 'Warning248LineIcon';

export default Warning248LineIcon
