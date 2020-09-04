import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning330LineIconSvg from '../../assets/GSDD/Warning_330_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning330LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning330LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning330LineIcon.Style = SvgIcon;
Warning330LineIcon.displayName = 'Warning330LineIcon';

export default Warning330LineIcon
