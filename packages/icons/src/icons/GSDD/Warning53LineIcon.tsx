import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning53LineIconSvg from '../../assets/GSDD/Warning_53_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning53LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning53LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning53LineIcon.Style = SvgIcon;
Warning53LineIcon.displayName = 'Warning53LineIcon';

export default Warning53LineIcon
