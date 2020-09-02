import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning208LineIconSvg from '../../assets/GSDD/Warning_208_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning208LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning208LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning208LineIcon.Style = SvgIcon;
Warning208LineIcon.displayName = 'Warning208LineIcon';

export default Warning208LineIcon
