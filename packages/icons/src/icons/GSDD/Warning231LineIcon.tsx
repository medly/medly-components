import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning231LineIconSvg from '../../assets/GSDD/Warning_231_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning231LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning231LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning231LineIcon.Style = SvgIcon;
Warning231LineIcon.displayName = 'Warning231LineIcon';

export default Warning231LineIcon
