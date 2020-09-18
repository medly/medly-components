import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning236LineIconSvg from '../../assets/GSDD/Warning_236_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning236LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning236LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning236LineIcon.Style = SvgIcon;
Warning236LineIcon.displayName = 'Warning236LineIcon';

export default Warning236LineIcon
