import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning377LineIconSvg from '../../assets/GSDD/Warning_377_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning377LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning377LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning377LineIcon.Style = SvgIcon;
Warning377LineIcon.displayName = 'Warning377LineIcon';

export default Warning377LineIcon
