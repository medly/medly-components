import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning45LineIconSvg from '../../assets/GSDD/Warning_45_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning45LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning45LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning45LineIcon.Style = SvgIcon;
Warning45LineIcon.displayName = 'Warning45LineIcon';

export default Warning45LineIcon
