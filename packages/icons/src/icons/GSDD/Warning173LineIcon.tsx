import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning173LineIconSvg from '../../assets/GSDD/Warning_173_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning173LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning173LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning173LineIcon.Style = SvgIcon;
Warning173LineIcon.displayName = 'Warning173LineIcon';

export default Warning173LineIcon
